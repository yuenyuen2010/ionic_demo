import React, { useState, useEffect, useCallback, useRef } from 'react';
import { IonPage, IonContent, IonIcon, IonButton } from '@ionic/react';
import {
    homeOutline,
    refreshOutline,
    checkmarkCircle,
    closeCircle,
    trophyOutline,
    volumeHighOutline,
    earOutline
} from 'ionicons/icons';
import { useTranslation } from 'react-i18next';
import CommonHeader from '../components/CommonHeader';
import { lessons } from '../data/lessons';
import './ListeningQuiz.css';

// Get all words from lessons for the quiz
const getAllWords = () => {
    const words: { tagalog: string; english: string }[] = [];
    lessons.forEach(lesson => {
        lesson.cards.forEach(card => {
            // Only include single words or short phrases (max 3 words)
            if (card.tagalog.split(' ').length <= 3) {
                words.push({ tagalog: card.tagalog, english: card.english });
            }
        });
    });
    return words;
};

interface QuizQuestion {
    word: { tagalog: string; english: string };
    options: { tagalog: string; english: string }[];
}

// Shuffle array helper
const shuffleArray = <T,>(array: T[]): T[] => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
};

const QUESTIONS_PER_GAME = 10;

const ListeningQuiz: React.FC = () => {
    const { t } = useTranslation();
    const audioRef = useRef<HTMLAudioElement | null>(null);

    const [questions, setQuestions] = useState<QuizQuestion[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
    const [gameOver, setGameOver] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [hasPlayed, setHasPlayed] = useState(false);

    // Generate questions
    const generateQuestions = useCallback((): QuizQuestion[] => {
        const allWords = getAllWords();
        const shuffledWords = shuffleArray(allWords);
        const selectedWords = shuffledWords.slice(0, QUESTIONS_PER_GAME);

        return selectedWords.map(word => {
            // Get 3 random wrong answers
            const wrongAnswers = shuffleArray(
                allWords.filter(w => w.tagalog !== word.tagalog)
            ).slice(0, 3);

            // Combine with correct answer and shuffle
            const options = shuffleArray([word, ...wrongAnswers]);

            return { word, options };
        });
    }, []);

    // Initialize game
    const initGame = useCallback(() => {
        const newQuestions = generateQuestions();
        setQuestions(newQuestions);
        setCurrentIndex(0);
        setScore(0);
        setSelectedAnswer(null);
        setIsCorrect(null);
        setGameOver(false);
        setHasPlayed(false);
    }, [generateQuestions]);

    useEffect(() => {
        initGame();
    }, [initGame]);

    const currentQuestion = questions[currentIndex];

    // Play audio for the current word
    const playAudio = async () => {
        if (!currentQuestion || isPlaying) return;

        setIsPlaying(true);
        setHasPlayed(true);

        const text = currentQuestion.word.tagalog;

        // Try local audio first
        try {
            const response = await fetch(`${import.meta.env.BASE_URL}audio/audio-map.json`);
            const audioMap = await response.json();
            const audioPath = audioMap[text]?.normal;

            if (audioPath) {
                const fullPath = `${import.meta.env.BASE_URL}${audioPath}`;
                if (audioRef.current) {
                    audioRef.current.src = fullPath;
                    audioRef.current.onended = () => setIsPlaying(false);
                    audioRef.current.onerror = () => playTTS(text);
                    await audioRef.current.play().catch(() => playTTS(text));
                    return;
                }
            }
        } catch {
            // Fallback to TTS
        }

        // Fallback to TTS API
        playTTS(text);
    };

    // TTS API fallback
    const playTTS = async (text: string) => {
        try {
            const response = await fetch('/.netlify/functions/tts', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ text, languageCode: 'fil-PH' })
            });

            if (response.ok) {
                const data = await response.json();
                if (data.audioContent) {
                    const audio = new Audio(`data:audio/mp3;base64,${data.audioContent}`);
                    audio.onended = () => setIsPlaying(false);
                    audio.play();
                }
            }
        } catch (error) {
            console.error('TTS failed:', error);
        } finally {
            setIsPlaying(false);
        }
    };

    // Auto-play on question change
    useEffect(() => {
        if (currentQuestion && !gameOver) {
            // Small delay before auto-playing
            const timer = setTimeout(() => {
                playAudio();
            }, 500);
            return () => clearTimeout(timer);
        }
    }, [currentIndex, questions]);

    const handleAnswer = (answer: string) => {
        if (selectedAnswer !== null || !hasPlayed) return;

        setSelectedAnswer(answer);
        const correct = answer === currentQuestion.word.tagalog;
        setIsCorrect(correct);

        if (correct) {
            setScore(prev => prev + 1);
        }

        // Move to next question after delay
        setTimeout(() => {
            if (currentIndex + 1 >= QUESTIONS_PER_GAME) {
                setGameOver(true);
            } else {
                setCurrentIndex(prev => prev + 1);
                setSelectedAnswer(null);
                setIsCorrect(null);
                setHasPlayed(false);
            }
        }, 2000);
    };

    const getScoreEmoji = () => {
        const percentage = (score / QUESTIONS_PER_GAME) * 100;
        if (percentage === 100) return '🏆';
        if (percentage >= 80) return '🌟';
        if (percentage >= 60) return '😊';
        if (percentage >= 40) return '💪';
        return '📚';
    };

    const getScoreMessage = () => {
        const percentage = (score / QUESTIONS_PER_GAME) * 100;
        if (percentage === 100) return t('listening.perfect');
        if (percentage >= 80) return t('listening.excellent');
        if (percentage >= 60) return t('listening.good');
        if (percentage >= 40) return t('listening.keepLearning');
        return t('listening.tryAgain');
    };

    if (!currentQuestion && !gameOver) {
        return null;
    }

    return (
        <IonPage>
            <CommonHeader title={t('listening.title')} showBackButton defaultHref="/home" />
            <audio ref={audioRef} />

            <IonContent className="listening-game-content">
                {!gameOver ? (
                    <div className="listening-game-container">
                        {/* Progress Bar */}
                        <div className="listening-progress-bar">
                            <div
                                className="listening-progress-fill"
                                style={{ width: `${((currentIndex + 1) / QUESTIONS_PER_GAME) * 100}%` }}
                            />
                        </div>

                        {/* Stats Row */}
                        <div className="listening-stats-row">
                            <div className="listening-stat">
                                <span className="stat-label">{t('listening.question')}</span>
                                <span className="stat-value">{currentIndex + 1}/{QUESTIONS_PER_GAME}</span>
                            </div>
                            <div className="listening-stat">
                                <span className="stat-label">{t('listening.score')}</span>
                                <span className="stat-value">{score}</span>
                            </div>
                        </div>

                        {/* Audio Player Card */}
                        <div className="audio-player-card">
                            <button
                                className={`play-audio-btn ${isPlaying ? 'playing' : ''}`}
                                onClick={playAudio}
                                disabled={isPlaying}
                            >
                                <IonIcon icon={isPlaying ? earOutline : volumeHighOutline} />
                            </button>
                            <p className="audio-hint">
                                {hasPlayed ? t('listening.tapAgain') : t('listening.tapToListen')}
                            </p>
                        </div>

                        {/* Answer Options */}
                        <div className="listening-options-grid">
                            {currentQuestion.options.map((option, idx) => {
                                let optionClass = 'listening-option';
                                if (selectedAnswer !== null) {
                                    if (option.tagalog === currentQuestion.word.tagalog) {
                                        optionClass += ' correct';
                                    } else if (option.tagalog === selectedAnswer && !isCorrect) {
                                        optionClass += ' wrong';
                                    } else {
                                        optionClass += ' faded';
                                    }
                                }
                                if (!hasPlayed) {
                                    optionClass += ' disabled';
                                }

                                return (
                                    <button
                                        key={idx}
                                        className={optionClass}
                                        onClick={() => handleAnswer(option.tagalog)}
                                        disabled={selectedAnswer !== null || !hasPlayed}
                                    >
                                        <span className="option-tagalog">{option.tagalog}</span>
                                        <span className="option-english">{option.english}</span>
                                        {selectedAnswer !== null && option.tagalog === currentQuestion.word.tagalog && (
                                            <IonIcon icon={checkmarkCircle} className="result-icon correct" />
                                        )}
                                        {selectedAnswer === option.tagalog && !isCorrect && (
                                            <IonIcon icon={closeCircle} className="result-icon wrong" />
                                        )}
                                    </button>
                                );
                            })}
                        </div>

                        {/* Answer Feedback */}
                        {selectedAnswer !== null && (
                            <div className={`listening-feedback ${isCorrect ? 'correct' : 'wrong'}`}>
                                <span className="feedback-emoji">{isCorrect ? '✅' : '❌'}</span>
                                <span className="feedback-text">
                                    {isCorrect ? t('listening.correct') : `${t('listening.wrong')} ${currentQuestion.word.tagalog}`}
                                </span>
                            </div>
                        )}
                    </div>
                ) : (
                    /* Game Over Screen */
                    <div className="listening-game-over">
                        <div className="game-over-card">
                            <div className="score-emoji">{getScoreEmoji()}</div>
                            <h2 className="score-title">{getScoreMessage()}</h2>

                            <div className="final-score">
                                <div className="score-circle">
                                    <span className="score-number">{score}</span>
                                    <span className="score-total">/ {QUESTIONS_PER_GAME}</span>
                                </div>
                            </div>

                            <div className="game-over-actions">
                                <IonButton expand="block" onClick={initGame} className="play-again-btn">
                                    <IonIcon icon={refreshOutline} slot="start" />
                                    {t('listening.playAgain')}
                                </IonButton>
                                <IonButton expand="block" fill="outline" routerLink="/home" className="home-btn">
                                    <IonIcon icon={homeOutline} slot="start" />
                                    {t('common.backToHome')}
                                </IonButton>
                            </div>
                        </div>
                    </div>
                )}
            </IonContent>
        </IonPage>
    );
};

export default ListeningQuiz;

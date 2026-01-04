import React, { useState, useEffect, useCallback } from 'react';
import { IonPage, IonContent, IonIcon, IonButton } from '@ionic/react';
import {
    homeOutline,
    refreshOutline,
    checkmarkCircle,
    closeCircle,
    trophyOutline,
    sparklesOutline
} from 'ionicons/icons';
import { useTranslation } from 'react-i18next';
import CommonHeader from '../components/CommonHeader';
import './EmojiGuess.css';

// Emoji quiz data - each item has emojis, correct answer, and wrong options
interface EmojiQuestion {
    emojis: string;
    answer: string;
    answerEn: string;
    options: string[];
}

const emojiQuestions: EmojiQuestion[] = [
    { emojis: '🏠', answer: 'Bahay', answerEn: 'House', options: ['Bahay', 'Paaralan', 'Simbahan', 'Tindahan'] },
    { emojis: '👋😊', answer: 'Kumusta', answerEn: 'Hello', options: ['Kumusta', 'Paalam', 'Salamat', 'Oo'] },
    { emojis: '🙏', answer: 'Salamat', answerEn: 'Thank you', options: ['Salamat', 'Pasensya', 'Mahal', 'Ingat'] },
    { emojis: '🌅👋', answer: 'Magandang Umaga', answerEn: 'Good Morning', options: ['Magandang Umaga', 'Magandang Gabi', 'Magandang Hapon', 'Kumusta'] },
    { emojis: '🌙👋', answer: 'Magandang Gabi', answerEn: 'Good Evening', options: ['Magandang Gabi', 'Magandang Umaga', 'Paalam', 'Matulog'] },
    { emojis: '❤️', answer: 'Mahal', answerEn: 'Love', options: ['Mahal', 'Galit', 'Malungkot', 'Masaya'] },
    { emojis: '😊', answer: 'Masaya', answerEn: 'Happy', options: ['Masaya', 'Malungkot', 'Galit', 'Takot'] },
    { emojis: '😢', answer: 'Malungkot', answerEn: 'Sad', options: ['Malungkot', 'Masaya', 'Galit', 'Gutom'] },
    { emojis: '😠', answer: 'Galit', answerEn: 'Angry', options: ['Galit', 'Masaya', 'Takot', 'Malungkot'] },
    { emojis: '🍽️', answer: 'Kumain', answerEn: 'To eat', options: ['Kumain', 'Uminom', 'Matulog', 'Maglaro'] },
    { emojis: '💧🥤', answer: 'Uminom', answerEn: 'To drink', options: ['Uminom', 'Kumain', 'Magluto', 'Tumakbo'] },
    { emojis: '😴💤', answer: 'Matulog', answerEn: 'To sleep', options: ['Matulog', 'Gumising', 'Kumain', 'Maglaro'] },
    { emojis: '🏃', answer: 'Tumakbo', answerEn: 'To run', options: ['Tumakbo', 'Lumakad', 'Umupo', 'Tumayo'] },
    { emojis: '🚶', answer: 'Lumakad', answerEn: 'To walk', options: ['Lumakad', 'Tumakbo', 'Tumalon', 'Sumayaw'] },
    { emojis: '📖', answer: 'Libro', answerEn: 'Book', options: ['Libro', 'Lapis', 'Papel', 'Mesa'] },
    { emojis: '✏️', answer: 'Lapis', answerEn: 'Pencil', options: ['Lapis', 'Libro', 'Papel', 'Bolpen'] },
    { emojis: '🐕', answer: 'Aso', answerEn: 'Dog', options: ['Aso', 'Pusa', 'Ibon', 'Isda'] },
    { emojis: '🐈', answer: 'Pusa', answerEn: 'Cat', options: ['Pusa', 'Aso', 'Daga', 'Ibon'] },
    { emojis: '🐟', answer: 'Isda', answerEn: 'Fish', options: ['Isda', 'Manok', 'Baboy', 'Baka'] },
    { emojis: '🐔', answer: 'Manok', answerEn: 'Chicken', options: ['Manok', 'Itik', 'Ibon', 'Pabo'] },
    { emojis: '☀️', answer: 'Araw', answerEn: 'Sun/Day', options: ['Araw', 'Buwan', 'Bituin', 'Ulap'] },
    { emojis: '🌙', answer: 'Buwan', answerEn: 'Moon', options: ['Buwan', 'Araw', 'Bituin', 'Gabi'] },
    { emojis: '⭐', answer: 'Bituin', answerEn: 'Star', options: ['Bituin', 'Buwan', 'Araw', 'Langit'] },
    { emojis: '🌧️', answer: 'Ulan', answerEn: 'Rain', options: ['Ulan', 'Hangin', 'Araw', 'Ulap'] },
    { emojis: '💨', answer: 'Hangin', answerEn: 'Wind', options: ['Hangin', 'Ulan', 'Bagyo', 'Ulap'] },
    { emojis: '🌊', answer: 'Dagat', answerEn: 'Sea', options: ['Dagat', 'Ilog', 'Lawa', 'Talon'] },
    { emojis: '⛰️', answer: 'Bundok', answerEn: 'Mountain', options: ['Bundok', 'Burol', 'Lambak', 'Gubat'] },
    { emojis: '🌳', answer: 'Puno', answerEn: 'Tree', options: ['Puno', 'Bulaklak', 'Damo', 'Dahon'] },
    { emojis: '🌸', answer: 'Bulaklak', answerEn: 'Flower', options: ['Bulaklak', 'Puno', 'Dahon', 'Prutas'] },
    { emojis: '🍎', answer: 'Prutas', answerEn: 'Fruit', options: ['Prutas', 'Gulay', 'Pagkain', 'Mansanas'] },
    { emojis: '👨', answer: 'Lalaki', answerEn: 'Man', options: ['Lalaki', 'Babae', 'Bata', 'Matanda'] },
    { emojis: '👩', answer: 'Babae', answerEn: 'Woman', options: ['Babae', 'Lalaki', 'Bata', 'Lola'] },
    { emojis: '👶', answer: 'Sanggol', answerEn: 'Baby', options: ['Sanggol', 'Bata', 'Matanda', 'Anak'] },
    { emojis: '👴👵', answer: 'Matanda', answerEn: 'Elder', options: ['Matanda', 'Bata', 'Sanggol', 'Magulang'] },
    { emojis: '👨‍👩‍👧', answer: 'Pamilya', answerEn: 'Family', options: ['Pamilya', 'Kaibigan', 'Kapitbahay', 'Kamag-anak'] },
    { emojis: '👫', answer: 'Kaibigan', answerEn: 'Friend', options: ['Kaibigan', 'Kaaway', 'Kasintahan', 'Kapatid'] },
    { emojis: '💑', answer: 'Kasintahan', answerEn: 'Sweetheart', options: ['Kasintahan', 'Kaibigan', 'Kapatid', 'Asawa'] },
    { emojis: '🏫', answer: 'Paaralan', answerEn: 'School', options: ['Paaralan', 'Bahay', 'Ospital', 'Simbahan'] },
    { emojis: '⛪', answer: 'Simbahan', answerEn: 'Church', options: ['Simbahan', 'Paaralan', 'Bahay', 'Palengke'] },
    { emojis: '🏥', answer: 'Ospital', answerEn: 'Hospital', options: ['Ospital', 'Paaralan', 'Bahay', 'Botika'] },
    { emojis: '🛒', answer: 'Palengke', answerEn: 'Market', options: ['Palengke', 'Tindahan', 'Mall', 'Ospital'] },
    { emojis: '🚗', answer: 'Kotse', answerEn: 'Car', options: ['Kotse', 'Bus', 'Tren', 'Bisikleta'] },
    { emojis: '🚌', answer: 'Bus', answerEn: 'Bus', options: ['Bus', 'Kotse', 'Dyip', 'Tren'] },
    { emojis: '✈️', answer: 'Eroplano', answerEn: 'Airplane', options: ['Eroplano', 'Barko', 'Tren', 'Helicopter'] },
    { emojis: '🚢', answer: 'Barko', answerEn: 'Ship', options: ['Barko', 'Bangka', 'Eroplano', 'Kotse'] },
    { emojis: '👁️', answer: 'Mata', answerEn: 'Eye', options: ['Mata', 'Ilong', 'Bibig', 'Tenga'] },
    { emojis: '👃', answer: 'Ilong', answerEn: 'Nose', options: ['Ilong', 'Mata', 'Bibig', 'Noo'] },
    { emojis: '👄', answer: 'Bibig', answerEn: 'Mouth', options: ['Bibig', 'Ilong', 'Tenga', 'Ngipin'] },
    { emojis: '👂', answer: 'Tenga', answerEn: 'Ear', options: ['Tenga', 'Mata', 'Ilong', 'Buhok'] },
    { emojis: '✋', answer: 'Kamay', answerEn: 'Hand', options: ['Kamay', 'Paa', 'Braso', 'Daliri'] },
];

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

const EmojiGuess: React.FC = () => {
    const { t } = useTranslation();

    const [questions, setQuestions] = useState<EmojiQuestion[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
    const [gameOver, setGameOver] = useState(false);
    const [shuffledOptions, setShuffledOptions] = useState<string[]>([]);
    const [streak, setStreak] = useState(0);
    const [bestStreak, setBestStreak] = useState(0);

    // Initialize game
    const initGame = useCallback(() => {
        const shuffledQuestions = shuffleArray(emojiQuestions).slice(0, QUESTIONS_PER_GAME);
        setQuestions(shuffledQuestions);
        setCurrentIndex(0);
        setScore(0);
        setSelectedAnswer(null);
        setIsCorrect(null);
        setGameOver(false);
        setStreak(0);

        if (shuffledQuestions.length > 0) {
            setShuffledOptions(shuffleArray(shuffledQuestions[0].options));
        }
    }, []);

    useEffect(() => {
        initGame();
    }, [initGame]);

    // Update shuffled options when question changes
    useEffect(() => {
        if (questions[currentIndex]) {
            setShuffledOptions(shuffleArray(questions[currentIndex].options));
        }
    }, [currentIndex, questions]);

    const currentQuestion = questions[currentIndex];

    const handleAnswer = (answer: string) => {
        if (selectedAnswer !== null) return; // Prevent double-click

        setSelectedAnswer(answer);
        const correct = answer === currentQuestion.answer;
        setIsCorrect(correct);

        if (correct) {
            setScore(prev => prev + 1);
            setStreak(prev => {
                const newStreak = prev + 1;
                if (newStreak > bestStreak) {
                    setBestStreak(newStreak);
                }
                return newStreak;
            });
        } else {
            setStreak(0);
        }

        // Move to next question after delay
        setTimeout(() => {
            if (currentIndex + 1 >= QUESTIONS_PER_GAME) {
                setGameOver(true);
            } else {
                setCurrentIndex(prev => prev + 1);
                setSelectedAnswer(null);
                setIsCorrect(null);
            }
        }, 1500);
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
        if (percentage === 100) return t('emoji.perfect');
        if (percentage >= 80) return t('emoji.excellent');
        if (percentage >= 60) return t('emoji.good');
        if (percentage >= 40) return t('emoji.keepLearning');
        return t('emoji.tryAgain');
    };

    if (!currentQuestion && !gameOver) {
        return null;
    }

    return (
        <IonPage>
            <CommonHeader title={t('emoji.title')} showBackButton defaultHref="/home" />

            <IonContent className="emoji-game-content">
                {!gameOver ? (
                    <div className="emoji-game-container">
                        {/* Progress Bar */}
                        <div className="emoji-progress-bar">
                            <div
                                className="emoji-progress-fill"
                                style={{ width: `${((currentIndex + 1) / QUESTIONS_PER_GAME) * 100}%` }}
                            />
                        </div>

                        {/* Stats Row */}
                        <div className="emoji-stats-row">
                            <div className="emoji-stat">
                                <span className="stat-label">{t('emoji.question')}</span>
                                <span className="stat-value">{currentIndex + 1}/{QUESTIONS_PER_GAME}</span>
                            </div>
                            <div className="emoji-stat">
                                <span className="stat-label">{t('emoji.score')}</span>
                                <span className="stat-value">{score}</span>
                            </div>
                            {streak >= 2 && (
                                <div className="emoji-stat streak">
                                    <IonIcon icon={sparklesOutline} />
                                    <span className="stat-value">{streak}🔥</span>
                                </div>
                            )}
                        </div>

                        {/* Emoji Display */}
                        <div className="emoji-display-card">
                            <div className="emoji-display">{currentQuestion.emojis}</div>
                            <p className="emoji-hint">{t('emoji.whatWord')}</p>
                        </div>

                        {/* Answer Options */}
                        <div className="emoji-options-grid">
                            {shuffledOptions.map((option, idx) => {
                                let optionClass = 'emoji-option';
                                if (selectedAnswer !== null) {
                                    if (option === currentQuestion.answer) {
                                        optionClass += ' correct';
                                    } else if (option === selectedAnswer && !isCorrect) {
                                        optionClass += ' wrong';
                                    } else {
                                        optionClass += ' faded';
                                    }
                                }

                                return (
                                    <button
                                        key={idx}
                                        className={optionClass}
                                        onClick={() => handleAnswer(option)}
                                        disabled={selectedAnswer !== null}
                                    >
                                        <span className="option-text">{option}</span>
                                        {selectedAnswer !== null && option === currentQuestion.answer && (
                                            <IonIcon icon={checkmarkCircle} className="result-icon correct" />
                                        )}
                                        {selectedAnswer === option && !isCorrect && (
                                            <IonIcon icon={closeCircle} className="result-icon wrong" />
                                        )}
                                    </button>
                                );
                            })}
                        </div>

                        {/* Answer Feedback */}
                        {selectedAnswer !== null && (
                            <div className={`emoji-feedback ${isCorrect ? 'correct' : 'wrong'}`}>
                                <span className="feedback-emoji">{isCorrect ? '✅' : '❌'}</span>
                                <span className="feedback-text">
                                    {isCorrect ? t('emoji.correct') : `${t('emoji.wrong')} ${currentQuestion.answer}`}
                                </span>
                                <span className="feedback-translation">({currentQuestion.answerEn})</span>
                            </div>
                        )}
                    </div>
                ) : (
                    /* Game Over Screen */
                    <div className="emoji-game-over">
                        <div className="game-over-card">
                            <div className="score-emoji">{getScoreEmoji()}</div>
                            <h2 className="score-title">{getScoreMessage()}</h2>

                            <div className="final-score">
                                <div className="score-circle">
                                    <span className="score-number">{score}</span>
                                    <span className="score-total">/ {QUESTIONS_PER_GAME}</span>
                                </div>
                            </div>

                            {bestStreak >= 3 && (
                                <div className="streak-badge">
                                    <IonIcon icon={sparklesOutline} />
                                    <span>{t('emoji.bestStreak')}: {bestStreak} 🔥</span>
                                </div>
                            )}

                            <div className="game-over-actions">
                                <IonButton expand="block" onClick={initGame} className="play-again-btn">
                                    <IonIcon icon={refreshOutline} slot="start" />
                                    {t('emoji.playAgain')}
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

export default EmojiGuess;

import React, { useState, useEffect, useMemo, useRef } from 'react';
import {
    IonContent,
    IonPage,
    IonButton,
    IonIcon,
    IonInput,
} from '@ionic/react';
import { trophyOutline, refreshOutline, helpCircleOutline, checkmarkCircleOutline, closeCircleOutline } from 'ionicons/icons';
import { useTranslation } from 'react-i18next';
import CommonHeader from '../components/CommonHeader';
import Footer from '../components/Footer';
import { lessons, Flashcard } from '../data/lessons';
import './SpellChallenge.css';

// Collect all flashcards
const getAllCards = (): Flashcard[] => {
    return lessons.flatMap(lesson => lesson.cards);
};

// Shuffle array utility
const shuffleArray = <T,>(array: T[]): T[] => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
};

const QUESTIONS_PER_ROUND = 8;

const SpellChallenge: React.FC = () => {
    const { t, i18n } = useTranslation();
    const allCards = useMemo(() => getAllCards(), []);
    const inputRef = useRef<HTMLIonInputElement>(null);

    const [questionIndex, setQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [userInput, setUserInput] = useState('');
    const [hintsUsed, setHintsUsed] = useState(0);
    const [showHint, setShowHint] = useState(false);
    const [feedback, setFeedback] = useState<'correct' | 'incorrect' | null>(null);
    const [gameCards, setGameCards] = useState<Flashcard[]>([]);
    const [isGameOver, setIsGameOver] = useState(false);

    // Get translation based on current language
    const getTranslation = (card: Flashcard): string => {
        switch (i18n.language) {
            case 'zh-TW': return card.zhTW || card.english;
            case 'zh-CN': return card.zhCN || card.english;
            default: return card.english;
        }
    };

    // Initialize game
    const startGame = () => {
        const shuffled = shuffleArray(allCards).slice(0, QUESTIONS_PER_ROUND);
        setGameCards(shuffled);
        setQuestionIndex(0);
        setScore(0);
        setUserInput('');
        setHintsUsed(0);
        setShowHint(false);
        setFeedback(null);
        setIsGameOver(false);
    };

    // Initialize on mount
    useEffect(() => {
        startGame();
    }, []);

    // Focus input on new question
    useEffect(() => {
        if (gameCards.length > 0 && !isGameOver && feedback === null) {
            setTimeout(() => {
                inputRef.current?.setFocus();
            }, 100);
        }
    }, [questionIndex, gameCards.length, isGameOver, feedback]);

    const currentCard = gameCards[questionIndex];

    const generateHint = (word: string): string => {
        const length = word.length;
        if (length <= 2) return word[0] + '_';
        const revealCount = Math.ceil(length / 3);
        let hint = word.substring(0, revealCount);
        for (let i = revealCount; i < length; i++) {
            hint += word[i] === ' ' ? ' ' : '_';
        }
        return hint;
    };

    const handleSubmit = () => {
        if (!currentCard || feedback !== null) return;

        const correctAnswer = currentCard.tagalog.toLowerCase().trim();
        const userAnswer = userInput.toLowerCase().trim();
        const isCorrect = userAnswer === correctAnswer;

        setFeedback(isCorrect ? 'correct' : 'incorrect');

        if (isCorrect) {
            setScore(prev => prev + (showHint ? 0.5 : 1));
        }

        // Auto-advance after delay
        setTimeout(() => {
            if (questionIndex + 1 >= QUESTIONS_PER_ROUND) {
                setIsGameOver(true);
            } else {
                setQuestionIndex(prev => prev + 1);
                setUserInput('');
                setShowHint(false);
                setFeedback(null);
            }
        }, 1500);
    };

    const handleHint = () => {
        if (!showHint) {
            setShowHint(true);
            setHintsUsed(prev => prev + 1);
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && feedback === null) {
            handleSubmit();
        }
    };

    // Game Over Screen
    if (isGameOver) {
        const percentage = Math.round((score / QUESTIONS_PER_ROUND) * 100);
        return (
            <IonPage>
                <CommonHeader title={t('spell.title')} showBackButton={true} defaultHref="/home" />
                <IonContent className="ion-padding spell-content">
                    <div className="spell-over-container fade-in-up">
                        <div className="spell-over-card">
                            <div className="trophy-icon">
                                <IonIcon icon={trophyOutline} />
                            </div>
                            <h2>{t('spell.complete')}</h2>
                            <p className="spell-over-subtitle">{t('spell.greatSpelling')}</p>

                            <div className="score-grid">
                                <div className="score-item">
                                    <div className="score-label">{t('game.finalScore')}</div>
                                    <div className="score-value">{score}/{QUESTIONS_PER_ROUND}</div>
                                </div>
                                <div className="score-item">
                                    <div className="score-label">{t('game.accuracy')}</div>
                                    <div className="score-value accent">{percentage}%</div>
                                </div>
                                <div className="score-item">
                                    <div className="score-label">{t('spell.hints')}</div>
                                    <div className="score-value streak">{hintsUsed}</div>
                                </div>
                            </div>

                            <IonButton expand="block" className="play-again-btn" onClick={startGame}>
                                <IonIcon icon={refreshOutline} slot="start" />
                                {t('game.playAgain')}
                            </IonButton>

                            <IonButton expand="block" fill="outline" routerLink="/home" className="home-btn">
                                {t('review.backToHome')}
                            </IonButton>
                        </div>
                        <Footer />
                    </div>
                </IonContent>
            </IonPage>
        );
    }

    if (!currentCard) {
        return (
            <IonPage>
                <CommonHeader title={t('spell.title')} showBackButton={true} defaultHref="/home" />
                <IonContent className="ion-padding spell-content">
                    <div className="loading-container">
                        <p>{t('game.loading')}</p>
                    </div>
                </IonContent>
            </IonPage>
        );
    }

    return (
        <IonPage>
            <CommonHeader title={t('spell.title')} showBackButton={true} defaultHref="/home" />
            <IonContent className="ion-padding spell-content">
                <div className="spell-container">
                    {/* Progress Bar */}
                    <div className="spell-progress">
                        <div className="progress-bar">
                            <div
                                className="progress-fill"
                                style={{ width: `${((questionIndex) / QUESTIONS_PER_ROUND) * 100}%` }}
                            />
                        </div>
                        <div className="progress-text">
                            {questionIndex + 1} / {QUESTIONS_PER_ROUND}
                        </div>
                    </div>

                    {/* Score Display */}
                    <div className="spell-stats">
                        <div className="stat-item">
                            <span className="stat-label">{t('game.score')}</span>
                            <span className="stat-value">{score}</span>
                        </div>
                    </div>

                    {/* Question Card */}
                    <div className={`spell-card ${feedback === 'correct' ? 'correct' : ''} ${feedback === 'incorrect' ? 'incorrect' : ''}`}>
                        <div className="spell-prompt-label">{t('spell.typeTagalog')}</div>
                        <h2 className="spell-prompt">{getTranslation(currentCard)}</h2>

                        {showHint && (
                            <div className="hint-display">
                                <span className="hint-label">{t('spell.hintLabel')}</span>
                                <span className="hint-text">{generateHint(currentCard.tagalog)}</span>
                            </div>
                        )}
                    </div>

                    {/* Input Area */}
                    <div className="input-area">
                        <IonInput
                            ref={inputRef}
                            value={userInput}
                            onIonInput={e => setUserInput(e.detail.value || '')}
                            onKeyDown={handleKeyDown}
                            placeholder={t('spell.placeholder')}
                            className={`spell-input ${feedback}`}
                            disabled={feedback !== null}
                            autocapitalize="off"
                            autocomplete="off"
                            spellcheck={false}
                        />

                        {feedback && (
                            <div className={`feedback-display ${feedback}`}>
                                <IonIcon icon={feedback === 'correct' ? checkmarkCircleOutline : closeCircleOutline} />
                                <span>
                                    {feedback === 'correct' ? t('review.correct') : currentCard.tagalog}
                                </span>
                            </div>
                        )}
                    </div>

                    {/* Action Buttons */}
                    <div className="action-buttons">
                        <IonButton
                            fill="outline"
                            onClick={handleHint}
                            disabled={showHint || feedback !== null}
                            className="hint-btn"
                        >
                            <IonIcon icon={helpCircleOutline} slot="start" />
                            {t('spell.hint')}
                        </IonButton>
                        <IonButton
                            onClick={handleSubmit}
                            disabled={!userInput.trim() || feedback !== null}
                            className="submit-btn"
                        >
                            {t('spell.submit')}
                        </IonButton>
                    </div>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default SpellChallenge;

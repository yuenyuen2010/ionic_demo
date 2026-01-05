/**
 * Unit tests for Lessons data structure
 * Validates the integrity and format of lesson data
 */
import { describe, it, expect } from 'vitest';
import { lessons, Lesson, Flashcard } from '../../data/lessons';

describe('Lessons Data Structure', () => {
    describe('lessons array', () => {
        it('should be a non-empty array', () => {
            expect(Array.isArray(lessons)).toBe(true);
            expect(lessons.length).toBeGreaterThan(0);
        });

        it('should have all required lesson properties', () => {
            lessons.forEach((lesson: Lesson) => {
                expect(lesson).toHaveProperty('id');
                expect(lesson).toHaveProperty('titleKey');
                expect(lesson).toHaveProperty('cards');
                expect(typeof lesson.id).toBe('string');
                expect(typeof lesson.titleKey).toBe('string');
                expect(Array.isArray(lesson.cards)).toBe(true);
            });
        });

        it('should have unique lesson IDs', () => {
            const ids = lessons.map(l => l.id);
            const uniqueIds = new Set(ids);
            expect(uniqueIds.size).toBe(ids.length);
        });
    });

    describe('flashcards', () => {
        it('should have all required card properties', () => {
            lessons.forEach((lesson) => {
                lesson.cards.forEach((card: Flashcard) => {
                    expect(card).toHaveProperty('id');
                    expect(card).toHaveProperty('tagalog');
                    expect(card).toHaveProperty('english');
                    expect(typeof card.id).toBe('string');
                    expect(typeof card.tagalog).toBe('string');
                    expect(typeof card.english).toBe('string');
                });
            });
        });

        it('should have unique card IDs across all lessons', () => {
            const allCardIds: string[] = [];
            lessons.forEach((lesson) => {
                lesson.cards.forEach((card: Flashcard) => {
                    allCardIds.push(card.id);
                });
            });
            const uniqueIds = new Set(allCardIds);
            expect(uniqueIds.size).toBe(allCardIds.length);
        });

        it('should have non-empty tagalog and english text', () => {
            lessons.forEach((lesson) => {
                lesson.cards.forEach((card: Flashcard) => {
                    expect(card.tagalog.trim().length).toBeGreaterThan(0);
                    expect(card.english.trim().length).toBeGreaterThan(0);
                });
            });
        });

        it('should have optional example property with correct format', () => {
            lessons.forEach((lesson) => {
                lesson.cards.forEach((card: Flashcard) => {
                    if (card.example) {
                        expect(typeof card.example.tagalog).toBe('string');
                        expect(typeof card.example.english).toBe('string');
                        expect(card.example.tagalog.length).toBeGreaterThan(0);
                        expect(card.example.english.length).toBeGreaterThan(0);
                    }
                });
            });
        });
    });

    describe('lesson groups', () => {
        it('should have group property when defined', () => {
            const lessonsWithGroups = lessons.filter(l => l.group);
            lessonsWithGroups.forEach((lesson) => {
                expect(typeof lesson.group).toBe('string');
                expect(lesson.group!.length).toBeGreaterThan(0);
            });
        });
    });
});

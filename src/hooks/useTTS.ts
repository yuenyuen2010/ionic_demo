import { useState, useCallback } from 'react';

const TTS_API_URL = 'https://tts-server-479744148035.asia-east1.run.app/tts';

interface UseTTSOptions {
    languageCode?: string;
    voiceName?: string;
}

interface UseTTSReturn {
    speak: (text: string) => Promise<void>;
    isLoading: boolean;
    error: string | null;
}

export const useTTS = (options?: UseTTSOptions): UseTTSReturn => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const languageCode = options?.languageCode || 'fil-PH';
    const voiceName = options?.voiceName || 'fil-PH-Standard-A';

    const speak = useCallback(async (text: string) => {
        if (!text.trim()) return;

        setIsLoading(true);
        setError(null);

        try {
            const response = await fetch(TTS_API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    text,
                    languageCode,
                    voiceName,
                }),
            });

            if (!response.ok) {
                throw new Error(`HTTP ${response.status}`);
            }

            const data = await response.json();

            const audio = new Audio(`data:audio/mp3;base64,${data.audioContent}`);
            await audio.play();
        } catch (err) {
            const errorMessage = err instanceof Error ? err.message : 'Failed to play audio';
            setError(errorMessage);
            console.error('TTS Error:', err);
        } finally {
            setIsLoading(false);
        }
    }, [languageCode, voiceName]);

    return { speak, isLoading, error };
};

export default useTTS;

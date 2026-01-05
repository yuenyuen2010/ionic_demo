import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    test: {
        // Use jsdom for DOM testing
        environment: 'jsdom',
        // Setup files to run before tests
        setupFiles: ['./src/test/setup.ts'],
        // Include test file patterns
        include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
        // Enable globals (describe, it, expect, etc.)
        globals: true,
        // Coverage configuration
        coverage: {
            reporter: ['text', 'html'],
            exclude: [
                'node_modules/',
                'src/test/',
                '**/*.d.ts',
            ],
        },
    },
});

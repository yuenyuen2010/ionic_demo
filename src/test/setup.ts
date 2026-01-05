/**
 * Vitest setup file
 * Runs before all tests to configure test environment
 */
import '@testing-library/jest-dom';

// Mock window.matchMedia for components that use it
Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: (query: string) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: () => { },
        removeListener: () => { },
        addEventListener: () => { },
        removeEventListener: () => { },
        dispatchEvent: () => false,
    }),
});

// Mock IntersectionObserver
class MockIntersectionObserver {
    observe = () => null;
    disconnect = () => null;
    unobserve = () => null;
}

Object.defineProperty(window, 'IntersectionObserver', {
    writable: true,
    configurable: true,
    value: MockIntersectionObserver,
});

// Mock ResizeObserver
class MockResizeObserver {
    observe = () => null;
    disconnect = () => null;
    unobserve = () => null;
}

Object.defineProperty(window, 'ResizeObserver', {
    writable: true,
    configurable: true,
    value: MockResizeObserver,
});

// Suppress console errors during tests (optional)
// console.error = () => {};

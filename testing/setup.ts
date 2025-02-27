import matchers from '@testing-library/jest-dom/matchers';
import { cleanup } from '@testing-library/react';
import { afterEach, expect } from 'vitest';

expect.extend(matchers);

// Hooks are reset before each suite
afterEach(() => {
  cleanup();
});

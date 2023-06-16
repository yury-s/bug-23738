import { defineConfig } from '@playwright/test';
import type { APIRequestOptions } from './tests/fixtures';

export default defineConfig<APIRequestOptions>({
  use: {
    apiBaseURL: 'https://playwright.dev/',
  },
  testDir: './tests',
});

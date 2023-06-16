import { test, expect } from './fixtures';

test('test', async ({ apiRequest }) => {
  const response = await apiRequest.get('/docs/intro')
  expect(response).toBeOK();
})

import { test, expect } from '@playwright/test';

test('dashboard should load and display tasks', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('h1')).toHaveText('Agentic Monorepo Monitor');
  const taskFeed = page.locator('table');
  await expect(taskFeed).toBeVisible();
  const taskRow = page.locator('table tbody tr').first();
  await expect(taskRow).toContainText('TASK-001');
});

import { expect, test } from '@playwright/test';

test('homepage renders the canonical landing page', async ({ page }) => {
  await page.goto('/');

  await expect(page).toHaveTitle(/Voscus - AI Agent Watchdog/);
  await expect(page.getByRole('heading', { name: /Watch every action before it becomes an incident/i })).toBeVisible();
  await expect(page.locator('img[alt="Voscus"]').first()).toHaveAttribute(
    'src',
    /voscus-logo-2026/,
  );
  await expect(page.getByRole('link', { name: /Book a Demo/i }).first()).toHaveAttribute(
    'href',
    /mailto:hello@voscus\.ai/,
  );
});

test('mobile navigation opens from the header menu button', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/');

  await page.getByRole('button', { name: /toggle menu/i }).click();

  await expect(page.getByRole('link', { name: /Why Voscus/i }).last()).toBeVisible();
  await expect(page.getByRole('link', { name: /Book a Demo/i }).last()).toHaveAttribute(
    'href',
    /mailto:hello@voscus\.ai/,
  );
});

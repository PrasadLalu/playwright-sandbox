import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Nom d\'utilisateur' }).click();
  await page.getByRole('textbox', { name: 'Nom d\'utilisateur' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Mot de passe' }).click();
  await page.getByRole('textbox', { name: 'Mot de passe' }).fill('admin123');
    await page.getByRole('button', { name: 'Connexion' }).click();
    
    await page.waitForTimeout(10000);
});
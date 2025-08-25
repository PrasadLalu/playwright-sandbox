import { expect, test } from "@playwright/test";

test("Present/NotPresent", async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/add_remove_elements/");
    await expect(page.locator("//button[normalize-space()='Delete']")).toHaveCount(0);
    await page.locator("button[onclick='addElement()']").click();
    await expect(page.locator("//button[normalize-space()='Delete']")).toHaveCount(1);
    await page.locator("button[onclick='addElement()']").click();
    await page.locator("button[onclick='addElement()']").click();
    await expect(page.locator("//button[normalize-space()='Delete']")).toHaveCount(3);
    await page.locator("(//button[normalize-space()='Delete'])[1]").click();
    await expect(page.locator("//button[normalize-space()='Delete']")).toHaveCount(2);

    await page.waitForTimeout(5000);
});

test("Enable/Disable", async({ page }) => {
    await page.goto("https://letcode.in/button");

    await expect(page.locator("#home")).toBeEnabled();
    await expect(page.locator("(//button[@id='isDisabled'])[1]")).toBeDisabled();

    await page.waitForTimeout(3000);
});

test.only("Text Match and Mismatch", async ({ page }) => {
    await page.goto("https://letcode.in/button");

    await expect(page.locator("#home")).toHaveText("Goto Home");
    await expect(page.locator("#home")).not.toHaveText("John");

    await page.waitForTimeout(2000);
});


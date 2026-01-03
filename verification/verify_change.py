from playwright.sync_api import sync_playwright

def verify_language_buttons():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # Navigate to the app
        page.goto("http://localhost:5173")

        # Wait for the app to load
        page.wait_for_selector("ion-header")

        # Take a screenshot of the header
        # We target the header specifically to see the language buttons
        header = page.locator("ion-header")
        header.screenshot(path="verification/language_buttons.png")

        # Also take a full page screenshot just in case
        page.screenshot(path="verification/full_page.png")

        print("Screenshots taken")
        browser.close()

if __name__ == "__main__":
    verify_language_buttons()

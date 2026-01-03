from playwright.sync_api import sync_playwright

def verify_language_buttons_text():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # Navigate to the app
        page.goto("http://localhost:5173")

        # Wait for the app to load
        page.wait_for_selector("ion-header")

        # Locate language buttons
        # The structure is IonButtons(slot=end) -> div -> IonButton
        # We can use a CSS selector
        lang_buttons = page.locator("ion-header ion-buttons[slot='end'] div ion-button")

        count = lang_buttons.count()
        print(f"Found {count} language buttons")

        for i in range(count):
            text = lang_buttons.nth(i).text_content()
            print(f"Button {i} text: '{text}'")

        browser.close()

if __name__ == "__main__":
    verify_language_buttons_text()

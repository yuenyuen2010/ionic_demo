
from playwright.sync_api import sync_playwright

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        # Navigate to the app (assuming it runs on port 5173, standard for Vite)
        # Note: I need to start the server first.
        try:
            page.goto("http://localhost:5173")
            page.wait_for_selector(".ambient-header")

            # Take screenshot of initial state (top)
            page.screenshot(path="verification/home_top.png")

            # Scroll down to check header fix
            page.mouse.wheel(0, 500)
            page.wait_for_timeout(1000) # Wait for scroll
            page.screenshot(path="verification/home_scrolled.png")

            print("Screenshots taken")
        except Exception as e:
            print(f"Error: {e}")
        finally:
            browser.close()

if __name__ == "__main__":
    run()

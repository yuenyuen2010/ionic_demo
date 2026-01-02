from playwright.sync_api import sync_playwright

def verify_logo(page):
    page.goto("http://localhost:8100")
    # Wait for the title to be visible
    page.wait_for_selector("ion-title")

    # Take a screenshot
    page.screenshot(path="verification/home.png")

if __name__ == "__main__":
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()
        try:
            verify_logo(page)
        except Exception as e:
            print(f"Error: {e}")
        finally:
            browser.close()

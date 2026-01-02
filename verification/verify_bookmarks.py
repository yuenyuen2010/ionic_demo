from playwright.sync_api import sync_playwright, expect
import time

def verify_bookmarks():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context()
        page = context.new_page()

        try:
            # Navigate to Home
            page.goto("http://localhost:5173/home")
            time.sleep(2) # Wait for page load
            page.screenshot(path="verification/step1_home.png")

            # Click on 'Basics' accordion to expand it
            page.get_by_text("Basics").click()
            time.sleep(1)

            # Click on 'Greetings' lesson
            page.get_by_role("heading", name="Greetings").click()
            time.sleep(1)
            page.screenshot(path="verification/step2_lesson_greetings.png")

            # Bookmark the first card "Kumusta?"
            # Find the bookmark button. It's the top right icon button.
            # In Ionic, ion-button with class bookmark-btn
            # Using locator for the bookmark button
            bookmark_btn = page.locator(".bookmark-btn").first
            bookmark_btn.click()
            time.sleep(1)

            # Go back to Home
            page.get_by_role("button", name="back").click()
            time.sleep(1)

            # Check if 'Saved Words' button exists and click it
            page.get_by_role("link", name="Saved Words").click()
            time.sleep(1)
            page.screenshot(path="verification/step3_bookmarks_page.png")

            # Verify "Kumusta?" is present in the bookmarks lesson
            expect(page.get_by_role("heading", name="Kumusta?")).to_be_visible()

            # Unbookmark it from the bookmarks page
            bookmark_btn = page.locator(".bookmark-btn").first
            bookmark_btn.click()
            time.sleep(1)

            # Reload to see if it disappears or empty state is shown (might need navigation back and forth in real app, but React state should update if logic is correct)
            # Actually, removing it from the list while viewing might not remove it from DOM immediately unless re-rendered list logic triggers.
            # But let's check if we can go back and return and it is empty.
            page.get_by_role("button", name="back").click()
            time.sleep(1)
            page.get_by_role("link", name="Saved Words").click()
            time.sleep(1)

            # Should show empty state
            expect(page.get_by_text("No saved words yet.")).to_be_visible()
            page.screenshot(path="verification/step4_bookmarks_empty.png")

        except Exception as e:
            print(f"Error: {e}")
            page.screenshot(path="verification/error.png")
        finally:
            browser.close()

if __name__ == "__main__":
    verify_bookmarks()

import { Builder, Capabilities, By } from "selenium-webdriver";

require("chromedriver");

const driver = new Builder().withCapabilities(Capabilities.chrome()).build();

beforeEach(async () => {
  driver.get("http://localhost:3000/");
});

afterAll(async () => {
  driver.quit();
});

test("Title shows up when page loads", async () => {
  const title = await driver.findElement(By.id("title"));
  const displayed = await title.isDisplayed();
  expect(displayed).toBe(true);
});

test("bot choices show up when clicking draw", async () => {
  const button = await driver.findElement(By.id("draw")).click();
  const div = await driver.findElement(By.id("choices"));
  expect(button).toBe(div);
});

const { getWelcomeMessage } = require("../src/message");

describe("getWelcomeMessage", () => {
  test("returns the expected application message", () => {
    expect(getWelcomeMessage()).toBe(
      "The Node.js and Express application is running successfully."
    );
  });
});
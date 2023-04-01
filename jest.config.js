module.exports = {
  roots: ["<rootDir>/src"],
  testRegex: "__tests__/.*.jest.test.jsx$",
  collectCoverageFrom: ["src/**/*.{js,jsx}", "!src/**/*.d.ts", "!src/mocks/**"],
  coveragePathIgnorePatterns: [],
  setupFilesAfterEnv: ["./config/jest/setupTests.js"],
  testEnvironment: "jsdom",
  modulePaths: ["<rootDir>/src"],
  transform: {
    "^.+\\.(ts|js|tsx|jsx)$": "@swc/jest",
    "^.+\\.css$": "<rootDir>/config/jest/cssTransform.js",
    "^(?!.*\\.(js|jsx|mjs|cjs|css|json)$)":
      "<rootDir>/config/jest/fileTransform.js",
  },
  transformIgnorePatterns: [
    "[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs|cjs)$",
    "^.+\\.module\\.(css|sass|scss)$",
  ],
  modulePaths: ["<rootDir>/src"],
  moduleFileExtensions: [
    // Place tsx and ts to beginning as suggestion from Jest team
    // https://jestjs.io/docs/configuration#modulefileextensions-arraystring
    "web.js",
    "js",
    "json",
    "web.jsx",
    "jsx",
    "node",
  ],
  watchPlugins: [
    "jest-watch-typeahead/filename",
    "jest-watch-typeahead/testname",
  ],
  resetMocks: true,
};

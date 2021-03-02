const path = require("path");
module.exports = {
  rootDir: path.resolve(__dirname),
  preset: "ts-jest",
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.vue$": "vue-jest",
    "^.+\\js$": "babel-jest",
    "^.+\\.(t|j)sx?$": "ts-jest",
  },
  moduleFileExtensions: ["vue", "js", "json", "jsx", "ts", "tsx", "node"],
  testMatch: ["**/tests/**/*.spec.ts", "**/__tests__/**/*.spec.ts"],
  moduleNameMapper: {
    "@/(.*)$": "<rootDir>/src/$1",
  },
  collectCoverage: true,
  coverageDirectory: "<rootDir>/src/test/coverage",
  collectCoverageFrom: [
    "<rootDir>/src/components/*.{js,vue}",
    "<rootDir>/src/components/**/*.{js,vue}",
    "!**/__tests__/**",
    "!**/node_modules/**",
  ],
  testResultsProcessor: "jest-vue-report",
  setupFilesAfterEnv: ["<rootDir>/jest-setup.ts"]
};

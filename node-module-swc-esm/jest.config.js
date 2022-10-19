export default {
  transform: {
    "^.+\\.(t|j)s?$": ["@swc/jest"],
  },
  testEnvironment: "node",
  testMatch: ["<rootDir>/test/**/*"],
};

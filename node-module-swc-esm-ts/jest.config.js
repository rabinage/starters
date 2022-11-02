export default {
  transform: {
    "^.+\\.(j|t)sx?$": ["@swc/jest"],
  },
  testEnvironment: "node",
  testMatch: ["<rootDir>/test/**/*"],
  extensionsToTreatAsEsm: [".ts"],
  moduleNameMapper: {
    "^(\\.{1,2}/.*)\\.js$": "$1",
  },
};

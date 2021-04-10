module.exports = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  collectCoverageFrom: ['components/**/*.{js, jsx}', 'pages/**/*.{js,jsx}'],
  moduleDirectories: ['node_modules', __dirname],
};

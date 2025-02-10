// Add any custom config to be passed to Jest
const config = {
  coverageProvider: 'v8',
  collectCoverageFrom: [
    'src/**/*.js',
    '!src/enums/*.js',
    '!src/models/*.js',
    '!src/**/*.d.ts',
    '!**/mocks/**',
    '!**/lib/**',
    '!**/data/**',
    '!**/tests/**',
  ],
  setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = config;

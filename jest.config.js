module.exports = {
  verbose: true,
  clearMocks: true,
  setupFilesAfterEnv: ['<rootDir>/src/__test__/config.js'],
  moduleNameMapper: {
    '\\.(styl|css)$': '<rootDir>/src/__mocks__/styleMock.js',
  },
};

import baseConfig from '../jest.config';

const config = {
  ...baseConfig,
  collectCoverageFrom: [
    'src/core/services/*.ts'
  ],
  coverageDirectory: 'coverage/integration',
  testMatch: ['<rootDir>/tests/integration/**/**/*.spec.ts'],
  testTimeout: 10000,
};

export default config;

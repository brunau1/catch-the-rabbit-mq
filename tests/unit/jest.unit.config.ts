import type {Config} from '@jest/types';

import baseConfig from '../jest.config';

const config: Config.InitialOptions = {
  ...baseConfig,
  collectCoverageFrom: [
    'src/core/services/*.ts',
  ],
  coverageDirectory: 'coverage/unit',
  detectOpenHandles: true,
  testMatch: ['<rootDir>/tests/unit/**/**/*.spec.ts'],
};

export default config;

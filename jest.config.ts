import type { Config } from 'jest';
import nextJest from 'next/jest.js';

import { pathsToModuleNameMapper } from 'ts-jest';
import { compilerOptions } from './tsconfig.json';

const createJestConfig = nextJest({
  dir: './',
});

const config: Config = {
  clearMocks: true,
  collectCoverageFrom: [
    '<rootDir>/app/(screen)/**/*.[jt]s?(x)',
    '!<rootDir>/app/(screen)/**/*.css.[jt]s',
    '<rootDir>/app/shared/components/**/*.[jt]s?(x)',
    '!<rootDir>/app/shared/components/**/*.css.[jt]s',
  ],
  collectCoverage: true,
  coverageDirectory: '.coverage',
  coverageProvider: 'v8',
  coverageReporters: ['lcov', 'json', 'text', 'text-summary'],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: '<rootDir>/',
  }),
  preset: 'ts-jest',
  roots: ['<rootDir>/app'],
  setupFilesAfterEnv: ['<rootDir>/app/application/test/setupTests.ts'],
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/'],
  transform: {
    '\\.(jpg|jpeg|png)$': '<rootDir>/app/application/test/transform/index.js',
    '\\.css\\.ts$': '@vanilla-extract/jest-transform',
  },
};

export default createJestConfig(config);

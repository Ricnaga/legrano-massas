import { pathsToModuleNameMapper, JestConfigWithTsJest } from 'ts-jest';
import { compilerOptions } from './tsconfig.json';

const config: JestConfigWithTsJest = {
  clearMocks: true,
  collectCoverageFrom: [
    '<rootDir>/src/pages/**/*.[jt]s?(x)',
    '!<rootDir>/src/pages/**/*.styled.[jt]s',
    '<rootDir>/src/shared/components/**/*.[jt]s?(x)',
    '!<rootDir>/src/shared/components/**/*.styled.[jt]s',
  ],
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageReporters: ['lcov', 'json', 'text', 'text-summary'],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: '<rootDir>/',
  }),
  preset: 'ts-jest',
  roots: ['<rootDir>/src'],
  setupFilesAfterEnv: ['<rootDir>/src/application/test/setupTests.ts'],
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/'],
  transform: {
    '\\.(jpg|jpeg|png)$': '<rootDir>/src/application/test/transform/index.js',
  },
};

export default config;

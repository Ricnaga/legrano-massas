import { CracoConfig } from '@craco/types';
import path from 'path';
import { pathsToModuleNameMapper } from 'ts-jest';
import { compilerOptions } from '../tsconfig.json';

const config: CracoConfig = {
  devServer: {
    open: false,
  },
  webpack: {
    alias: {
      '@shared': path.join(process.cwd(), 'src', 'shared'),
      '@application': path.join(process.cwd(), 'src', 'application'),
      '@assets': path.join(process.cwd(), 'src', 'assets'),
    },
  },
  jest: {
    configure: {
      moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
        prefix: '<rootDir>/',
      }),
      preset: 'ts-jest',
    },
  },
};

export default config;

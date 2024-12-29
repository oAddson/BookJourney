import { pathsToModuleNameMapper } from 'ts-jest';

export default {
  preset: 'ts-jest/presets/default-esm',
  testEnvironment: 'node',
  extensionsToTreatAsEsm: ['.ts'],
  transform: {
    '^.+\\.(ts|tsx)$': [
      'ts-jest',
      {
        useESM: true,
      },
    ],
  },
  moduleNameMapper: pathsToModuleNameMapper(
    {
      '@src/*': ['src/*'],
    },
    { prefix: '<rootDir>/' }
  ),
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
};

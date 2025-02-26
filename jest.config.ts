import { compilerOptions } from './tsconfig.json';
import { pathsToModuleNameMapper } from 'ts-jest';
import type { JestConfigWithTsJest } from 'ts-jest';

const jestConfig: JestConfigWithTsJest = {
	clearMocks: true,
	collectCoverage: true,
	coverageDirectory: 'coverage',
	coverageProvider: 'v8',
	coverageReporters: [
		'html',
		'text-summary'
	],
	testMatch: [
		'**/?(*.)+(spec|test).[tj]s?(x)'
	],
	transform: { '^.+\\.(ts|tsx)$': 'ts-jest' },
	moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>' }),
	preset: 'ts-jest',
	testEnvironment: 'node',
};

export default jestConfig;

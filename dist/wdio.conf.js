var _a, _b;
import url from 'node:url';
import path from 'node:path';
import { hooks } from './src/support/hooks.js';
const dirname = url.fileURLToPath(new URL('.', import.meta.url));
const baseUrl = (_b = (_a = process.env.BASE_URL) !== null && _a !== void 0 ? _a : process.env.DEV_BASE_URL) !== null && _b !== void 0 ? _b : 'https://your-dev-app.example.com';
export const config = {
    runner: 'local',
    maxInstances: 5,
    specs: [
        './src/features/**/*.feature',
    ],
    exclude: [],
    capabilities: [{
            browserName: 'chrome',
        }],
    logLevel: 'trace',
    outputDir: path.join(dirname, '/logs'),
    bail: 0,
    baseUrl,
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    framework: 'cucumber',
    reporters: ['spec'],
    cucumberOpts: {
        backtrace: false,
        requireModule: [],
        failAmbiguousDefinitions: true,
        failFast: false,
        ignoreUndefinedDefinitions: false,
        names: [],
        require: [
            './src/steps/given.ts',
            './src/steps/then.ts',
            './src/steps/when.ts',
        ],
        scenarioLevelReporter: false,
        order: 'defined',
        snippetSyntax: undefined,
        strict: true,
        tagExpression: 'not @Pending',
        tagsInTitle: false,
        timeout: 20000,
    },
    ...hooks,
};

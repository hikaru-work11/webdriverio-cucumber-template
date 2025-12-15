/* eslint-disable no-console */
import url from 'node:url';
import path from 'node:path';

import { config as buildConfig } from './wdio.conf.js';

const dirname = url.fileURLToPath(new URL('.', import.meta.url));

buildConfig.capabilities = [{
    browserName: 'chrome',
    'goog:chromeOptions': {
        args: [
            '--disable-infobars',
            '--window-size=1280,800',
            '--headless',
            '--no-sandbox',
            '--disable-gpu',
            '--disable-setuid-sandbox',
            '--disable-dev-shm-usage',
        ],
    },
}];

buildConfig.path = '/';

buildConfig.beforeFeature = async () => {
    await (browser as WebdriverIO.Browser).url('/');
    const pageTitle = await (browser as WebdriverIO.Browser).getTitle();
    if (!pageTitle) {
        console.error('Dev environment is not reachable or returned an empty title');
        console.log(await (browser as WebdriverIO.Browser).getPageSource());
        process.exit(1);
    }
};

if (process.env.CI) {
    buildConfig.outputDir = path.join(dirname, 'logs');
}

export const config = buildConfig;

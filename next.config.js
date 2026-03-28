/* eslint-disable @typescript-eslint/no-var-requires */
const { homepage } = require('./package.json');

const { NODE_ENV } = process.env;

module.exports = {
  output: NODE_ENV === 'production' ? 'export' : undefined,
  distDir: NODE_ENV === 'production' ? 'docs' : '.next',
  images: {
    unoptimized: true,
  },
  assetPrefix: (() => {
    if (NODE_ENV === 'production' && homepage) {
      try {
        const { pathname } = new URL(homepage);
        if (pathname !== '/') {
          return pathname;
        }
        return '';
      } catch {
        return '';
      }
    }
    return '';
  })(),
};

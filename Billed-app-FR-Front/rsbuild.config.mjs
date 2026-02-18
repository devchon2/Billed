
import { defineConfig } from '@rsbuild/core';

export default defineConfig({
    source: {
        entry: {
            index: './src/index.js',
        },
        define: {
            'import.meta.env.PUBLIC_API_URL': JSON.stringify(process.env.PUBLIC_API_URL || 'http://localhost:5678'),
            'import.meta.env.PUBLIC_USE_MOCKS': JSON.stringify(process.env.PUBLIC_USE_MOCKS || 'true'),
        },
    },
    html: {
        template: './index.html',
    },
    output: {
        assetPrefix: '/billed/',
    },
});

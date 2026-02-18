import path from 'path';
import { defineConfig } from '@rsbuild/core';

const useMocks = process.env.PUBLIC_USE_MOCKS === 'true' || !process.env.PUBLIC_API_URL;

export default defineConfig({
    source: {
        entry: {
            index: './src/index.js',
        },
        define: {
            'import.meta.env.PUBLIC_API_URL': JSON.stringify(process.env.PUBLIC_API_URL || 'http://localhost:5678'),
            'import.meta.env.PUBLIC_USE_MOCKS': JSON.stringify(useMocks.toString()),
            'import.meta.env.PUBLIC_BASE_PATH': JSON.stringify('/Billed/'),
        },
        alias: {
            '../app/Store.js': useMocks ? './src/__mocks__/store.js' : './src/app/Store.js',
            './Store.js': useMocks ? './src/__mocks__/store.js' : './src/app/Store.js',
        }
    },
    html: {
        template: './index.html',
    },
    output: {
        assetPrefix: '/Billed/',
    },
});

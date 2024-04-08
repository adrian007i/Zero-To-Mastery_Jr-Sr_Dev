import {defineConfig} from 'vitest/config';

export default defineConfig ({
    test:{
        environment: 'jsdom',
        globals: true,
        setupFiles: "tests/setup.ts"
    }
})

// https://www.youtube.com/watch?v=8Xwq35cPwYg
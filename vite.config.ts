import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig(() => {
	return {
		plugins: [
			tsconfigPaths(),
			react()
		],
		server: {
			open: true
		},
		test: {
			environment: 'jsdom',
			globals: true,
			setupFiles: ['./vitest.setup.ts']
		},
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: `@use "./src/assets/styles" as *;`,
				}
			}
		}
	};
});
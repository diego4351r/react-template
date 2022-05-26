import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import sassDts from "vite-plugin-sass-dts";
import * as path from 'path';

export default defineConfig(() => {
	return {
		plugins: [
			tsconfigPaths(),
			sassDts({
				enabledMode: ['production'],
				global: {
					generate: true,
					outFile: path.resolve(__dirname, './src/style.d.ts')
				}
			}),
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
					additionalData: `@use "@/styles" as *;`,
					importer(...args) {
						if (args[0] !== '@/styles') {
							return;
						}

						return {
							file: `${path.resolve(__dirname, './src/assets/styles')}`
						};
					}
				}
			}
		}
	};
});
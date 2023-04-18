import resolve from '@rollup/plugin-node-resolve';
import cleaner from 'rollup-plugin-cleaner';
import commonjs from '@rollup/plugin-commonjs';
import { babel } from '@rollup/plugin-babel';
import path from 'path';
import { existsSync, readdirSync } from 'fs';
import copy from 'rollup-plugin-copy';

/**
 * This is used to split out the individual Web components into there own js output
 * 
 * @param {*} source The base folder to start serching
 * @returns a list of file paths that indicate the exported web component
 */

const getPrimaryComponent = source =>
    readdirSync(source, { withFileTypes: true })
    .filter(entry => entry.isDirectory())
    .map(entry => path.join(source, entry.name, `${entry.name}.ts`))
    .filter(x => existsSync(x));

const individualComponents = getPrimaryComponent('./src/components');

/* Add more inputs if needed */
const additionalFiles = []

export default [{
    input: [...additionalFiles, ...individualComponents],
    output: {
        format: 'es',
        chunkFileNames: '[name]-[hash].js',
        entryFileNames: '[name].js',
        dir: './dist',
        sourcemap: true,
    },

    plugins: [
        cleaner({ targets: ['./dist/'] }),
        resolve({ extensions: ['.ts', '.js'] }),
        commonjs({ include: ['node_modules/**'] }),
        babel({
            babelHelpers: 'bundled',
            extensions: ['.ts'],
            assumptions: { setPublicClassFields: true },
            presets: [
                [
                    '@babel/preset-env', {
                        shippedProposals: true,
                        bugfixes: true,
                    },
                ],
                '@babel/preset-typescript',
            ],
            plugins: [
                ['@babel/plugin-proposal-decorators', { decoratorsBeforeExport: true }],
                ['@babel/plugin-proposal-class-properties'],
            ],
        }),
        copy({ targets: [{ src: 'src/components/**/*.js', dest: 'dist' }] }),
    ],
}];
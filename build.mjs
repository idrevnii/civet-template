import esbuild from 'esbuild'
import civetPlugin from '@danielx/civet/esbuild-plugin'

esbuild
  .build({
    entryPoints: ['./src/index.civet'],
    platform: 'node',
    bundle: true,
    outfile: './build/out.js',
    plugins: [civetPlugin]
  })
  .catch(() => process.exit(1))

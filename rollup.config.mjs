import nodeResolve from '@rollup/plugin-node-resolve';

export default {
  input: 'build/index.js',
  output: {
    file: 'dist/index.umd.js',
    format: 'umd'
  },
  plugins: [
    nodeResolve(),
  ]
};

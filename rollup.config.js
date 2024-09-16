import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';

export default {
  input: './src/index.js', // 入口文件
  output: [
    {
      file: 'dist/index.js', // 打包输出的文件
      format: 'cjs', // CommonJS 格式
      sourcemap: true, // 是否生成 sourcemap
    },
    {
      file: 'dist/index.esm.js', // 打包输出的 ES 模块
      format: 'esm', // ES 模块格式
      sourcemap: true,
    }
  ],
  external: ['react', 'react-dom'], // 不打包 React 和 React-DOM
  plugins: [
    resolve(),
    commonjs(),
    babel({
      exclude: 'node_modules/**',
      presets: ['@babel/preset-react'],
    }),
    terser() // 压缩代码
  ],
};

export default {
  presets: [
    '@docusaurus/core/lib/babel/preset', // Docusaurus 默认配置
  ],
  // plugins: ['@babel/plugin-transform-modules-commonjs'],
  plugins: [
    [
      'filter-imports',
      {
        test: /\.mdx$/, // 仅处理 MDX 文件
        modifiers: {
          transform: code => code.replace(/\/+\s*eslint-.*\n/g, ''),
        },
      },
    ],
  ],
};

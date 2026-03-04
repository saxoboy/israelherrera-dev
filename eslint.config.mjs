import nextConfig from 'eslint-config-next';
import coreWebVitals from 'eslint-config-next/core-web-vitals';
import typescript from 'eslint-config-next/typescript';

const eslintConfig = [
  ...nextConfig,
  ...coreWebVitals,
  ...typescript,
  {
    rules: {
      'react/no-unescaped-entities': 'off',
      'react/display-name': 'off',
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      '@next/next/no-img-element': 'off',
    },
  },
];

export default eslintConfig;

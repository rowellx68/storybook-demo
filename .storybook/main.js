module.exports = {
  stories: ['../src/**/*.stories.(ts|md)x'],
  addons: [
    '@storybook/preset-create-react-app',
    '@storybook/addon-actions',
    '@storybook/addon-knobs',
    {
      name: '@storybook/addon-docs',
      options: { configureJSX: true },
    },
  ],
};

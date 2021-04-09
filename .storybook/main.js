module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-essentials', '@storybook/addon-storysource', '@storybook/addon-actions'],
  features: {
    postcss: false,
  },
};

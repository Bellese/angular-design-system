import { setCompodocJson } from '@storybook/addon-docs/angular';
import docJson from '../documentation.json';
import '@storybook/addon-console';
import { addons } from '@storybook/addons';
import belleseTheme from './belleseTheme';

setCompodocJson(docJson);

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      order: ['Introduction', 'Components', 'Services', 'Deprecated'],
    },
  },
  docs: {
    theme: belleseTheme,
  },
};

document.body.className += ' ' + 'ds-base ds-l-container';

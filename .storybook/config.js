import { addParameters, addDecorator, configure } from '@storybook/angular';
import { themes } from '@storybook/theming';
import '@storybook/addon-console';

function loadStories() {
  // automatically import all files ending in *.stories.ts
  let req = require.context('../src/stories', true, /\.stories\.ts$/);
  req.keys().forEach(filename => req(filename));

  // automatically import all files ending in *.stories.ts
  const deprecated = './modules/table/';
  req = require.context('../src/app', true, /\.stories\.ts$/);
  const currentStoryKeys = req.keys().filter(key => !key.startsWith(deprecated));
  const deprecatedStoryKeys = req.keys().filter(key => key.startsWith(deprecated));
  currentStoryKeys.forEach(filename => req(filename));
  deprecatedStoryKeys.forEach(filename => req(filename));
  document.body.className += ' ' + 'ds-base ds-l-container';
}

addParameters({
  options: {
    name: 'Bellese Angular Design System',
    url: 'https://github.com/Bellese/angular-design-system',
    theme: themes.normal,
    categoryOrder: ['Introduction', 'Components', 'Services', 'Deprecated'],
  },
});

configure(loadStories, module);

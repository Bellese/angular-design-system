import { addParameters, configure } from '@storybook/angular';
import { themes } from '@storybook/theming';

// automatically import all files ending in *.stories.ts
const req = require.context('../src/', true, /\.stories\.ts$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
  document.body.className += ' ' + 'ds-base';
}

addParameters({
  options: {
    name: 'Bellese Angular Design System',
    url: 'https://github.com/Bellese/angular-design-system',
    theme: themes.normal,
  },
});

configure(loadStories, module);

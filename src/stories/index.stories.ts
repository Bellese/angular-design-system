import { moduleMetadata } from '@storybook/angular';
import { Meta } from '@storybook/angular/types-6-0';
import { StoriesModule } from './stories.module';
import InstallationComponent from './installation.component';
import WelcomeComponent from './welcome.component';

export default {
  title: 'Introduction/Getting Started',
  decorators: [
    moduleMetadata({
      imports: [StoriesModule],
    }),
  ],
} as Meta;

export const Welcome = () => ({
  component: WelcomeComponent,
  props: { label: 'Label' },
});

export const Installation = () => ({
  component: InstallationComponent,
  props: { label: 'Label' },
});

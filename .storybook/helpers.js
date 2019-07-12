
import { action } from '@storybook/addon-actions';

export function handleClick(event) {
    action('testing');
    console.log('The following value is emitted');
    console.log(event);
}

export const defaultProps = {
    handleClick: handleClick
}
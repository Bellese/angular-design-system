

export function handleEvent(event) {
    console.log('The following value is emitted:', event);
}

export const defaultProps = {
    handleEvent: handleEvent,
}
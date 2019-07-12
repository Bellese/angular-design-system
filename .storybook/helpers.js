

export function handleClick(event) {
    console.log('The following value is emitted:', event);
}

export const defaultProps = {
    handleClick: handleClick,
}
export class CodeSnippetModel {

    id ?: string;
    label: string;
    contents: CodeSnippetContentItem[];
    copyLinkDisplay ?: boolean;
    copyLinkLabel ?: string;
    copyLinkAriaLabel ?: string;
    copyContent ?: string;
    dataAutoId ?: string;

    constructor(options?) {
        // Set defaults if they are not set when the object is created
        const defaults = {
            id: 'code_snippet',
            copyLinkDisplay: true,
            copyLinkLabel: 'Copy to Clipboard',
            copyLinkAriaLabel:  'Activate enter key to copy to clipboard',
            dataAutoId: 'code_snippet',
        };

        // Merge defaults with parameters that are passed into the object
        const values = Object.assign(defaults, options);

        // Set the values in this object based on the defaults and parameters that are passed in
        for (const key of Object.keys(values)) {
            this[key] = values[key];
        }
     }
}

export class CodeSnippetContentItem {
    isHighlighted = false;
    lineNumber: number;
    content: string;

    constructor(options?) {
        // Set the values in this object based on the defaults and parameters that are passed in
        for (const key of Object.keys(options)) {
            this[key] = options[key];
        }
     }
}

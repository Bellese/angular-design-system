import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export class CodeSnippetModel {
    id = 'code_snippet';
    label: string;
    contentItems: CodeSnippetContentItemModel[];
    copyLinkDisplay = true;
    copyLinkLabel = 'Copy to Clipboard';
    copyLinkAriaLabel = 'Activate enter key to copy to clipboard';
    copyContent ?: string;
    dataAutoId = 'code_snippet';

    constructor(options?) {
        // Set the values in this object based on the defaults and parameters that are passed in
        for (const key of Object.keys(options)) {
            this[key] = options[key];
        }
     }
}

export class CodeSnippetContentItemModel {
    className: string;
    lineNumber: number;
    icon: IconDefinition;
    content: string;

    constructor(options?) {
        // Set the values in this object based on the defaults and parameters that are passed in
        for (const key of Object.keys(options)) {
            this[key] = options[key];
        }
     }
}

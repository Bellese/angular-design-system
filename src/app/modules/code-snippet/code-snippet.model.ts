export class CodeSnippetModel {

    id ?: string;
    label: string;
    content: string[];
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
        const fileUploadModelValues = Object.assign(defaults, options);

        // Set the values in this object based on the defaults and parameters that are passed in
        for (const key of Object.keys(fileUploadModelValues)) {
            this[key] = fileUploadModelValues[key];
        }
     }
}

import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';
export class FileUploadModel {

    id ?: string;
    icon ?: IconDefinition;
    label ?: string;
    orLabel ?: string;
    buttonIcon ?: IconDefinition;
    buttonLabel ?: string;
    buttonType ?: string;
    buttonAriaLabel ?: string;
    ariaLabel ?: string;
    className ?: string;
    classNameActive ?: string;
    height ?: number | string;
    dataAutoId ?: string;

    constructor(options?) {
        // Set defaults if they are not set when the object is created
        const defaults = {
            id: 'file_upload',
            icon: faCloudUploadAlt,
            label: 'Drag files here to upload',
            orLabel: 'or',
            buttonIcon: faCloudUploadAlt,
            buttonLabel: 'Select Files',
            buttonType: 'ds-c-button ds-c-button--primary',
            buttonAriaLabel: 'Activate enter key to upload files',
            ariaLabel:  'Activate enter key to upload files',
            className: 'ds-u-fill--white',
            classNameActive: 'ds-u-fill--primary-alt-lightest',
            height: 'auto',
            dataAutoId: 'file_upload',
        };

        // Merge defaults with parameters that are passed into the object
        const fileUploadModelValues = {
            ...defaults,
            ...options,
        };

        // Set the values in this object based on the defaults and parameters that are passed in
        for (const key of Object.keys(fileUploadModelValues)) {
            this[key] = fileUploadModelValues[key];
        }
     }
}

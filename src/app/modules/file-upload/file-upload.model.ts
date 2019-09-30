export class FileUploadModel {

    id ?: string;
    label ?: string;
    ariaLabel ?: string;
    className ?: string;
    classNameActive ?: string;
    height ?: number | string;
    dataAutoId ?: string;

    constructor(options?) {
        // Set defaults if they are not set when the object is created
        const defaults = {
            id: 'file_upload',
            label: 'Drag files here to upload',
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

export class AngularDesignSystemModel {
    constructor(options?) {
        // Set the values in this object based on the defaults and parameters that are passed in
        if (options) {
            for (const key of Object.keys(options)) {
                this[key] = options[key];
            }
        }
    }
}
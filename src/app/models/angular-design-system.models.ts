export class AngularDesignSystemModel {
    // Set the values in this object based on the defaults and parameters that are passed in
    setOptions(options?) {
        if (options) {
            for (const key of Object.keys(options)) {
                this[key] = options[key];
            }
        }
    }
}
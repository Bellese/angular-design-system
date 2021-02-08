export class ModalGenericModel {
  id: string;
  title: string;
  data: string;
  modalCount: string;
  modalClass: string;
  header?: string;
  body: string;
  bodyFormatted: any[];
  buttonType?: string;
  buttonLabel?: string;
  buttonId?: string;
  onConfirm: any;
  useNgContent?: boolean;

  constructor(options?) {
    // Set defaults if they are not set when the object is created
    const defaults = {
      buttonType: 'ds-c-button--primary',
      buttonLabel: 'Okay',
      buttonId: 'actionOKButton',
      header: null,
      useNgContent: false,
    };

    // Merge defaults with parameters that are passed into the object
    const modelValues = {
      ...defaults,
      ...options,
    };

    // Set the values in this object based on the defaults and parameters that are passed in
    for (const key of Object.keys(modelValues)) {
      this[key] = modelValues[key];
    }
  }
}

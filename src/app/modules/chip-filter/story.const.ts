export const dropdownList = [
  { id: 1, text: 'Provider Name 1' },
  { id: 2, text: 'Provider Name 2' },
  { id: 3, text: 'Provider Name 3' },
  { id: 4, text: 'Provider Name 4' },
  { id: 5, text: 'Provider Name 5' },
  { id: 6, text: 'Provider Name 6' },
  { id: 7, text: 'Provider Name 7' },
  { id: 8, text: 'Provider Name 8' },
  { id: 9, text: 'Provider Name 9' },
  { id: 10, text: 'Provider Name 10' },
  { id: 11, text: 'Provider Name 11' },
  { id: 12, text: 'Provider Name 12' },
  { id: 13, text: 'Provider Name 13' },
  { id: 14, text: 'Provider Name 14' },
  { id: 15, text: 'Provider Name 15' },
  { id: 16, text: 'Provider Name 16' },
  { id: 17, text: 'Provider Name 17' },
  { id: 18, text: 'Provider Name 18' },
  { id: 19, text: 'Provider Name 19' },
  { id: 20, text: 'Provider Name 20' },
];

export const settingsProps = [
  {
    name: 'idField',
    type: 'string',
    value: 'The id for the dropdown li',
  },
  {
    name: 'singleSelection',
    type: 'boolean',
    value: 'Use this to further specify the dropdown component to the screen reader',
  },
  {
    name: 'textField',
    type: 'string',
    value: 'This changes the key for displayed text on dropdown li.',
  },
  {
    name: 'disabledField',
    type: 'string',
    value: 'This is the.',
  },
  {
    name: 'itemsShowLimit',
    type: 'number',
    value: 'Hide or show number of results.',
  },
  {
    name: 'maxHeight',
    type: 'number',
    value: 'Max height of dropdown.',
  },
  {
    name: 'enableCheckAll',
    type: 'boolean',
    value: 'Display check all.',
  },
  {
    name: 'closeDropDownOnSelection',
    type: 'boolean',
    value: 'Close dropdown on selection.',
  },
  {
    name: 'labelName',
    type: 'string',
    value: "The value that shows in the dropdown's label",
  },
  {
    name: 'labelClass',
    type: 'string',
    value: 'The CSS class that applies to the label',
  },
  {
    name: 'hintMessage',
    type: 'string',
    value: 'A hint message to display in the component',
  },
  {
    name: 'errorMessage',
    type: 'string',
    value: 'An error message to display in the component',
  },
  {
    name: 'error',
    type: 'boolean',
    value: 'If set to true, the dropdown turns red.',
  },

  {
    name: 'placeholder',
    type: 'string',
    value: 'Dropdown search placeholder.',
  },
];

export const parameters = [
  {
    name: 'disabled',
    type: 'boolean',
    value: 'If set to true, the dropdown is disabled.',
  },
  {
    name: 'settings',
    type: 'IDropdownSettings',
    value: "Use this to override the dropdown component's default settings.",
    properties: settingsProps,
  },
  {
    name: 'data',
    type: 'Array<{id: number, text: string}>',
    value: 'Populate dropdown list with data.',
  },
];

export const dropdownSettings = {
  singleSelection: false,
  placeholder: 'Search Provider(s)',
  searchPlaceholder: 'Search by Provider Name or ID',
  idField: 'id',
  textField: 'test',
  selectAllText: 'Select All Providers',
  unSelectAllText: 'UnSelect All Providers',
  label: 'Search Providers',
  itemsShowLimit: 3,
  allowSearchFilter: true,
  labelName: 'Provider(s)',
};

export const dropdownSettingsError = {
  ...dropdownSettings,
  error: true,
  errorMessage: 'This is an error',
};

export const dropdownSettings2 = {
  singleSelection: false,
  idField: 'id',
  textField: 'text',
  selectAllText: 'Select All Providers',
  unSelectAllText: 'UnSelect All Providers',
  label: 'Search Providers',
  itemsShowLimit: 3,
  allowSearchFilter: false,
};

export const dropdownSettings3 = {
  singleSelection: false,
  idField: 'id',
  textField: 'text',
  selectAllText: 'Select All Providers',
  unSelectAllText: 'UnSelect All Providers',
  label: 'Search Providers',
  itemsShowLimit: 2,
  allowSearchFilter: false,
};

export const dropdownSettingsSingleSelection = {
  ...dropdownSettings,
  singleSelection: true,
};

export const dropdownSettingsLimitSelection = {
  ...dropdownSettings,
  limitSelection: 2,
};

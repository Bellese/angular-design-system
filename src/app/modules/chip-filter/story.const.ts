export const dropdownList = [
  { id: 1, text: 'Provider Name 1' },
  { id: 2, text: 'Provider Name 2213123123' },
  { id: 3, text: 'Provider Name 452345243543254' },
  { id: 4, text: 'Provider Name 14325234523454235' },
  { id: 5, text: 'Provider Name 1e2q423q45' },
  { id: 5, text: 'Provider Name 1e2q423q45' },
  { id: 5, text: 'Provider Name 1e2q423q45' },
  { id: 5, text: 'Provider Name 1e2q423q45' },
  { id: 5, text: 'Provider Name 1e2q423q45' },
  { id: 5, text: 'Provider Name 1e2q423q45' },
  { id: 5, text: 'Provider Name 1e2q423q45' },
  { id: 5, text: 'Provider Name 1e2q423q45' },
  { id: 5, text: 'Provider Name 1e2q423q45' },
  { id: 5, text: 'Provider Name 1e2q423q45' },
  { id: 5, text: 'Provider Name 1e2q423q45' },
  { id: 5, text: 'Provider Name 1e2q423q45' },
  { id: 5, text: 'Provider Name 1e2q423q45' },
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

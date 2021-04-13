import {
  Component,
  HostListener,
  forwardRef,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  ViewEncapsulation,
  OnInit,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { ListItem, IDropdownSettings } from './chip-filter.model';
import { ChipFilterPipe } from './chip-filter.pipe';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Subject } from 'rxjs/internal/Subject';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

export const DROPDOWN_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => AppChipFilterComponent),
  multi: true,
};

const noop = () => {};

@Component({
  selector: 'app-chip-filter',
  templateUrl: './chip-filter.component.html',
  styleUrls: ['./chip-filter.component.scss'],
  providers: [DROPDOWN_CONTROL_VALUE_ACCESSOR],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class AppChipFilterComponent implements ControlValueAccessor, OnInit, OnChanges {
  public _sourceDataType = null;
  public _sourceDataFields: string[] = [];
  public selectedItems: ListItem[] = [];
  public icon = faTimes;
  public filter: ListItem;
  public defaultSettings: IDropdownSettings = {
    singleSelection: false,
    idField: 'id',
    textField: 'text',
    disabledField: 'isDisabled',
    enableCheckAll: true,
    selectAllText: 'Select All Providers',
    unSelectAllText: 'UnSelect All Providers',
    allowSearchFilter: false,
    error: null,
    limitSelection: -1,
    clearSearchFilter: true,
    maxHeight: 197,
    itemsShowLimit: 999999999999,
    searchPlaceholderText: 'Search',
    noDataAvailablePlaceholderText: 'No data available',
    closeDropDownOnSelection: false,
    showSelectedItemsAtTop: false,
    defaultOpen: false,
    allowRemoteDataSearch: false,
    hintMessage: null,
    errorMessage: null,
    labelName: null,
    placeholder: 'Select',
    searchPlaceholder: 'Search',
  };

  onTouchedCallback: () => void = noop;
  onChangeCallback: (_: any) => void = noop;

  private searchQueryChanged: Subject<string> = new Subject<string>();
  public searchFilter: string;

  @Input() disabled = false;

  @Input() settings: IDropdownSettings;

  @Input() data: ListItem[] = [];

  @Input() loading = false;

  @Output('onFilterChange')
  onFilterChange: EventEmitter<any> = new EventEmitter<any>();

  @Output('onDropDownClose')
  onDropDownClose: EventEmitter<ListItem> = new EventEmitter<any>();

  @Output('onSelect')
  onSelect: EventEmitter<ListItem> = new EventEmitter<any>();

  @Output('onDeSelect')
  onDeSelect: EventEmitter<ListItem> = new EventEmitter<any>();

  @Output('onSelectAll')
  onSelectAll: EventEmitter<ListItem[]> = new EventEmitter<any[]>();

  @Output('onDeSelectAll')
  onDeSelectAll: EventEmitter<ListItem[]> = new EventEmitter<any[]>();

  @Output('onScrolledToBottom')
  onScrolledToBottom: EventEmitter<boolean> = new EventEmitter<boolean>();

  @HostListener('scroll', ['$event'])
  onScroll(event: any) {
    if (event.target.offsetHeight + event.target.scrollTop >= event.target.scrollHeight) {
      this.onScrolledToBottom.emit(true);
    }
  }

  constructor(private cdr: ChangeDetectorRef, private listFilterPipe: ChipFilterPipe) {
    this.searchQueryChanged.pipe(debounceTime(1000)).subscribe((data) => {
      this.onFilterChange.emit(data);
    });
  }

  ngOnInit() {
    this.settings = this.setSettings(this.settings);
    this.setData(this.data);
    this.filter = new ListItem(this.data);
  }

  ngOnChanges(changes: SimpleChanges) {
    this.setComponent();
  }

  setComponent(): void {
    this.settings = this.setSettings(this.settings);
    this.setData(this.data);
  }

  setData(value: any[]): void {
    const firstItem = value[0];
    this._sourceDataType = typeof firstItem;
    this._sourceDataFields = this.getFields(firstItem);
    value.map((item: any) =>
      typeof item === 'string' || typeof item === 'number'
        ? new ListItem(item)
        : new ListItem({
            id: item[this.settings.idField],
            text: item[this.settings.textField],
            isDisabled: item[this.settings.disabledField],
          })
    );
  }

  setSettings(value: IDropdownSettings): IDropdownSettings {
    if (value) {
      return Object.assign(this.defaultSettings, value);
    } else {
      return Object.assign(this.defaultSettings);
    }
  }

  onFilterTextChange($event) {
    this.searchFilter = $event;
    this.searchQueryChanged.next($event);
  }

  onItemClick($event: any, item: ListItem) {
    if (this.disabled || item.isDisabled) {
      return false;
    }

    const found = this.isSelected(item);
    // tslint:disable-next-line:max-line-length
    const allowAdd =
      this.settings.limitSelection === -1 ||
      (this.settings.limitSelection > 0 && this.selectedItems.length < this.settings.limitSelection);
    if (!found) {
      if (allowAdd) {
        this.addSelected(item);
      }
    } else {
      this.removeSelected(item);
    }
    if (this.settings.singleSelection && this.settings.closeDropDownOnSelection) {
      this.closeDropdown();
    }
  }

  writeValue(value: any) {
    if (value !== undefined && value !== null && value.length > 0) {
      if (this.settings.singleSelection) {
        try {
          if (value.length >= 1) {
            const firstItem = value[0];
            this.selectedItems = [
              typeof firstItem === 'string' || typeof firstItem === 'number'
                ? new ListItem(firstItem)
                : new ListItem({
                    id: firstItem[this.settings.idField],
                    text: firstItem[this.settings.textField],
                    isDisabled: firstItem[this.settings.disabledField],
                  }),
            ];
          }
        } catch (e) {
          console.log(e);
        }
      } else {
        const data = value.map((item: any) =>
          typeof item === 'string' || typeof item === 'number'
            ? new ListItem(item)
            : new ListItem({
                id: item[this.settings.idField],
                text: item[this.settings.textField],
                isDisabled: item[this.settings.disabledField],
              })
        );
        if (this.settings.limitSelection > 0) {
          this.selectedItems = data.splice(0, this.settings.limitSelection);
        } else {
          this.selectedItems = data;
        }
      }
    } else {
      this.selectedItems = [];
    }
    this.onChangeCallback(value);
  }

  // From ControlValueAccessor interface
  registerOnChange(fn: any) {
    this.onChangeCallback = fn;
  }

  // From ControlValueAccessor interface
  registerOnTouched(fn: any) {
    this.onTouchedCallback = fn;
  }

  // Set touched on blur
  @HostListener('blur')
  public onTouched() {
    this.closeDropdown();
    this.onTouchedCallback();
  }

  trackByFn(index, item) {
    return item.id;
  }

  isSelected(clickedItem: ListItem) {
    let found = false;
    this.selectedItems.forEach((item) => {
      if (clickedItem.id === item.id) {
        found = true;
      }
    });
    return found;
  }

  isLimitSelectionReached(): boolean {
    return this.settings.limitSelection === this.selectedItems.length;
  }

  isAllItemsSelected(): boolean {
    // All items cannot be selected if items are being filtered
    if (this.searchFilter) {
      return false;
    }
    // get disabld item count
    const filteredItems = this.listFilterPipe.transform(this.data, this.filter);
    const itemDisabledCount = filteredItems.filter((item) => item.isDisabled).length;
    // take disabled items into consideration when checking
    if ((!this.data || this.data.length === 0) && this.settings.allowRemoteDataSearch) {
      return false;
    }
    return filteredItems.length === this.selectedItems.length + itemDisabledCount;
  }

  itemShowRemaining(): number {
    return this.selectedItems.length - this.settings.itemsShowLimit;
  }

  addSelected(item: ListItem) {
    if (this.settings.singleSelection) {
      this.selectedItems = [];
      this.selectedItems.push(item);
    } else {
      this.selectedItems.push(item);
    }
    this.onChangeCallback(this.emittedValue(this.selectedItems));
    this.onSelect.emit(this.emittedValue(item));
  }

  removeSelected(itemSel: ListItem) {
    this.selectedItems.forEach((item) => {
      if (itemSel.id === item.id) {
        this.selectedItems.splice(this.selectedItems.indexOf(item), 1);
      }
    });
    this.onChangeCallback(this.emittedValue(this.selectedItems));
    this.onDeSelect.emit(this.emittedValue(itemSel));
  }

  emittedValue(val: any): any {
    const selected = [];
    if (Array.isArray(val)) {
      val.map((item) => {
        selected.push(this.objectify(item));
      });
    } else {
      if (val) {
        return this.objectify(val);
      }
    }
    return selected;
  }

  private objectify(val: ListItem) {
    if (this._sourceDataType === 'object') {
      const obj = {};
      obj[this.settings.idField] = val.id;
      obj[this.settings.textField] = val.text;
      if (this._sourceDataFields.includes(this.settings.disabledField)) {
        obj[this.settings.disabledField] = val.isDisabled;
      }
      return obj;
    }
    if (this._sourceDataType === 'number') {
      return Number(val.id);
    } else {
      return val.text;
    }
  }

  toggleDropdown(evt) {
    evt.preventDefault();
    if (this.disabled && this.settings.singleSelection) {
      return;
    }
    this.settings.defaultOpen = !this.settings.defaultOpen;
    if (!this.settings.defaultOpen) {
      this.onDropDownClose.emit();
    }
  }

  closeDropdown() {
    this.searchFilter = '';
    this.settings.defaultOpen = false;
    // clear search text
    if (this.settings.clearSearchFilter) {
      this.filter.text = '';
    }
    this.onDropDownClose.emit();
  }

  toggleSelectAll() {
    if (this.disabled || this.loading) {
      return false;
    }
    if (!this.isAllItemsSelected()) {
      // filter out disabled item first before slicing
      this.selectedItems = this.listFilterPipe
        .transform(this.data, this.filter)
        .filter((item) => !item.isDisabled)
        .slice();
      this.onSelectAll.emit(this.emittedValue(this.selectedItems));
    } else {
      this.selectedItems = [];
      this.onDeSelectAll.emit(this.emittedValue(this.selectedItems));
    }
    this.onChangeCallback(this.emittedValue(this.selectedItems));
  }

  getFields(inputData) {
    const fields = [];
    if (typeof inputData !== 'object') {
      return fields;
    }
    // tslint:disable-next-line:forin
    for (const prop in inputData) {
      fields.push(prop);
    }
    return fields;
  }
}

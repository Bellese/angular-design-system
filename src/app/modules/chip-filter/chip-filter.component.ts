import { Component, forwardRef, HostBinding, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-chip-filter',
  templateUrl: './chip-filter.component.html',
  styleUrls: ['./chip-filter.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => ChipFilterComponent),
    multi: true
  }]
})
export class ChipFilterComponent implements ControlValueAccessor {

  newTag = '';
  @Input() tags: string[] = [];

  // we give some disabled style
  @HostBinding('class.disabled')
  isDisabled = false;

  // we store the two callbacks that Angular gives us
  // we also provide defaults so that our component can be used standalone
  onChange: (value: string[]) => void = () => {};
  onTouched: Function = () => {};

  // didn't change!
  remove(index: number) {
    this.tags.splice(index, 1);
    this.copyAndEmit();
  }

  // didn't change!
  onInputKeyDown($event: KeyboardEvent) {
    if ($event.key === 'Enter') {
      this.tags.push(this.newTag);
      this.newTag = '';
      this.copyAndEmit();
    } else if ($event.key === 'Backspace' && this.newTag === '') {
      this.tags.pop();
      this.copyAndEmit();
    }
  }

  // writeValue is called by Angular when the input value changes
  writeValue(value: string[]) {
    this.tags = value || [];
  }

  // registerOnChange is called by Angular
  // this is the opportunity for us to save the onChange callback
  // we use this callback to "output" new values
  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  // registerOnTouched is called by Angular
  // this is the opportunity for us to save the onTouched callback
  // we use this callback to notify Angular when our component has been touched
  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

  // setDisabledState is called by Angular
  // this is the opportunity for us to adjust our component style and logic
  setDisabledState(disabled: boolean) {
    this.isDisabled = disabled;
  }

  // we remove the @Output that we had and we, instead, emit through the onChange callback
  // we also tell Angular that the component has been touched
  private copyAndEmit() {
    this.tags = this.tags.slice(0);
    this.onChange(this.tags);
    this.onTouched();
  }
}

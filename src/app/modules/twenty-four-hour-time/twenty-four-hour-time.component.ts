import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-twenty-four-hour-time',
  templateUrl: './twenty-four-hour-time.component.html',
  styleUrls: ['./twenty-four-hour-time.component.css'],
})
export class AppTwentyFourHourTimeComponent implements OnInit, OnChanges {
  @Input() ariaLabel: string;
  @Input() alertMessageList?: Array<string>;
  @Input() alertVariation?: string;
  @Input() title: string;
  @Input() id: string = 'time-container-group-div';
  @Input() defaultValue: string;
  @Input() inputClass: string;
  @Input() labelClass: string;
  @Input() hint: string;
  @Input() hintClass: string;
  @Input() errorMessage: string;
  @Input() dataAutoId: string;
  @Input() placeholder: string;
  @Input() disabled: boolean;
  @Input() control: FormControl;
  @Input() formlyAttributes = {};
  @Output() keyup = new EventEmitter<any>();
  @Output() paste = new EventEmitter<any>();
  @Output() blur = new EventEmitter<any>();
  @Output() userInput = new EventEmitter<any>();

  timeHours: string;
  timeMinutes: string;
  timePickerVisible = false;
  hours: string[] = [];
  minutes: string[] = [];
  previousHours: string[];
  nextHours: string[];
  previousMinutes: string[];
  nextMinutes: string[];
  screenReaderAnnouncement = '';
  inputDebounceTimeout: ReturnType<typeof setTimeout>;
  knownGoodTimeValue: string;

  faChevronUp = faChevronUp;
  faChevronDown = faChevronDown;

  constructor() {}

  ngOnInit() {
    if (!this.control) {
      this.control = new FormControl();
    }
    for (let h = 0; h < 24; h++) {
      this.hours.push(h.toString().padStart(2, '0'));
    }
    for (let m = 0; m < 60; m++) {
      this.minutes.push(m.toString().padStart(2, '0'));
    }

    this.setDisabled();
    this.setValue();
    this.calculateSurroundingHours();
    this.calculateSurroundingMinutes();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.disabled) {
      this.setDisabled();
    }
    if (changes.defaultValue) {
      this.setValue();
    }
  }

  setValue() {
    if (this.defaultValue) {
      this.control?.setValue(this.defaultValue);
      this.knownGoodTimeValue = this.defaultValue;
      this.announceCurrentTime();
      [this.timeHours, this.timeMinutes] = this.defaultValue.split(':');
    }
  }

  calculateSurroundingHours() {
    const hoursIndex = Number(this.timeHours);
    if (hoursIndex <= 3) {
      this.previousHours = this.hours.slice(0, hoursIndex);
    } else {
      this.previousHours = this.hours.slice(hoursIndex - 3, hoursIndex);
    }
    this.nextHours = this.hours.slice(hoursIndex + 1, hoursIndex + 4);
  }

  calculateSurroundingMinutes() {
    const minutesIndex = Number(this.timeMinutes);
    if (minutesIndex <= 3) {
      this.previousMinutes = this.minutes.slice(0, minutesIndex);
    } else {
      this.previousMinutes = this.minutes.slice(minutesIndex - 3, minutesIndex);
    }
    this.nextMinutes = this.minutes.slice(minutesIndex + 1, minutesIndex + 4);
  }

  setDisabled() {
    if (this.disabled) {
      this.control?.disable();
    } else {
      this.control?.enable();
    }
  }

  callbackFunction(e) {
    this.userInput.emit(e);
  }

  blurCallBackFunction(e) {
    if (!e.relatedTarget?.classList?.contains('clock-image')) {
      this.removeFocusStyling();
    }
    this.blur.emit(e);
  }

  keyupCallBackFunction(e) {
    this.keyup.emit(e);
  }

  stopPropagation(e) {
    e.stopPropagation();
  }

  addFocusStyling() {
    document.getElementById(`time-container-${this.id}`).classList.add('time-container-focus');
  }

  removeFocusStyling() {
    document.getElementById(`time-container-${this.id}`).classList.remove('time-container-focus');
  }

  addValidationError = () => {
    this.announceCurrentTime(true);
    this.removeFocusStyling();
    document.getElementById(`time-container-${this.id}`).classList.add('time-container-error-shake');
    setTimeout(() => {
      this.removeValidationError();
    }, 5000);
  };
  removeValidationError = () => {
    document.getElementById(`time-container-${this.id}`).classList.remove('time-container-error-shake');
    this.addFocusStyling();
  };

  announceCurrentTime(hasError = false) {
    this.screenReaderAnnouncement = `${hasError ? 'Invalid time provided' : ''}. The current time value is ${
      this.control.value
    }`;
  }

  /*
  this function is called when the user hits enter or when they leave the input
  and by the input after a debounce time

   don't accept the input if there's
   - a colon but it isn't in the 2nd or 3rd spot
   - a colon but only one minute digit
   - no colon but length isn't 3 or 4 digits
   - an hour value greater than 23
   - a minute value greater than 59
  */
  formatAndSetTime(event) {
    const verifiedTime = /^(?:[01][0-9]|2[0-3]):[0-5][0-9]$/;
    const input: string = event.target.value;
    const colonIndex = input.indexOf(':');
    let formattedInput;
    let hours;
    let minutes;
    // check to see if the colon is in the 2nd or 3rd spot i.e. H:MM or HH:MM
    if ([1, 2].includes(colonIndex)) {
      [hours, minutes] = input.split(':');
      hours = hours.padStart(2, '0');
      if (minutes.length === 2) {
        formattedInput = `${hours}:${minutes}`;
      }
    }
    // if colon isn't in 2nd or 3rd spot, then we don't allow it anywhere else
    // a colon-less time can only be 3 or 4 digits long i.e. HMM
    else if (colonIndex === -1 && [3, 4].includes(input.length)) {
      hours = input.slice(0, input.length - 2).padStart(2, '0');
      minutes = input.slice(input.length - 2);
      formattedInput = `${hours}:${minutes}`;
    }

    if (verifiedTime.test(formattedInput)) {
      event.target.value = formattedInput;
      this.control.setValue(formattedInput);
      this.knownGoodTimeValue = formattedInput;
      this.announceCurrentTime();
      this.timeHours = hours;
      this.timeMinutes = minutes;
      return;
    }
    this.addValidationError();
    event.target.value = this.knownGoodTimeValue ?? '';
    this.control.setValue(this.knownGoodTimeValue);
  }

  // ensure that the user can only enter numbers and a colon
  // this function is called for every keystroke
  validateInput(event) {
    // close the time picker if it's open
    this.timePickerVisible = false;

    const input = event.target.value;
    const permittedCharacters = /^[0-9:]{0,5}$/;
    const forbiddenCharacters = /[^[0-9:]/g;
    this.removeValidationError();
    if (!permittedCharacters.test(input)) {
      event.target.value = input.replace(forbiddenCharacters, '');
    }

    clearTimeout(this.inputDebounceTimeout);
    // attempt to format and set time if we haven't gotten any more inputs in the past second
    // don't attempt to validate if user hasn't entered at least 3 characters
    if (input.replace(':', '').length >= 3) {
      this.inputDebounceTimeout = setTimeout(() => {
        this.formatAndSetTime(event);
      }, 1000);
    }
  }

  openTimePicker(event: Event) {
    if (!this.disabled) {
      this.removeValidationError();
      this.addFocusStyling();
      event.stopPropagation();
      event.preventDefault();

      // if we open the time picker before any time is set, default to midday
      if (!this.control.value) {
        this.control.setValue('12:00');
        this.knownGoodTimeValue = '12:00';
        this.timeHours = '12';
        this.timeMinutes = '00';
      }
      this.calculateSurroundingHours();
      this.calculateSurroundingMinutes();
      this.timePickerVisible = true;
      setTimeout(() => this.focusOnCloseButton(event), 5);
    }
  }

  focusLost(event: any) {
    // focusout fires when the time picker loses focus
    // check that the new element gaining focus doesn't also live inside the time picker
    // if it doesn't, we can safely close the time picker
    // ignore these clicks and only close the timepicker when we're clicking outside the page
    const timePickerClasses = ['bumper-icon', 'time-picker-body', 'time-picker-label', 'close-image'];
    if (timePickerClasses.every((tpc) => !event.relatedTarget?.classList?.contains(tpc))) {
      this.removeFocusStyling();
      this.closeTimePicker(event);
    }
  }

  closeTimePicker(event: Event) {
    event.stopPropagation();
    event.preventDefault();
    this.timePickerVisible = false;
  }

  stepTime(unit: 'hours' | 'minutes', direction: 'increment' | 'decrement') {
    if (unit === 'hours') {
      const currentHour = Number(this.timeHours);
      let newHour;

      if (direction === 'increment' && currentHour < 23) {
        newHour = currentHour + 1;
      } else if (direction === 'decrement' && currentHour > 0) {
        newHour = currentHour - 1;
      } else {
        // we're either at the minimum or maximum end of our range
        return;
      }
      this.timeHours = String(newHour).padStart(2, '0');
      this.calculateSurroundingHours();
    } else if (unit === 'minutes') {
      // calculate minute step
      const currentMinute = Number(this.timeMinutes);
      let newMinute;
      if (direction === 'increment' && currentMinute < 59) {
        newMinute = currentMinute + 1;
      } else if (direction === 'decrement' && currentMinute > 0) {
        newMinute = currentMinute - 1;
      } else {
        // we're either at the minimum or maximum end of our range
        return;
      }
      this.timeMinutes = String(newMinute).padStart(2, '0');
      this.calculateSurroundingMinutes();
    }
    this.control.setValue(`${this.timeHours}:${this.timeMinutes}`);
    this.knownGoodTimeValue = `${this.timeHours}:${this.timeMinutes}`;
    this.announceCurrentTime();
  }

  focusOnCloseButton(event: Event) {
    event.preventDefault();
    document.getElementById(`${this.id}_close_time_picker`)?.focus();
  }
}

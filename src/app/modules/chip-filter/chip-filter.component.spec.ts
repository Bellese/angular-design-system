import { waitForAsync, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { AppChipFilterComponent } from './chip-filter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatChipsModule } from '@angular/material/chips';
import { MatInputModule } from '@angular/material/input';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ChipFilterPipe } from './chip-filter.pipe';

describe('ChipFilterComponent', () => {
  let component: AppChipFilterComponent;
  let fixture: ComponentFixture<AppChipFilterComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [CommonModule, FormsModule, ReactiveFormsModule, MatChipsModule, MatInputModule, FontAwesomeModule],
        providers: [ChipFilterPipe],
        declarations: [AppChipFilterComponent, ChipFilterPipe],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(AppChipFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('getFields', () => {
    it('should return an empty array if input data is not an object', () => {
      expect(component.getFields('test').length).toBe(0);
    });
    it('should return a list of keys if input data is an object', () => {
      expect(component.getFields({ id: 1 })[0]).toBe('id');
    });
  });

  describe('toggleSelectAll', () => {
    it('should return false if field is disabled', () => {
      component.disabled = false;
      expect(component.toggleSelectAll()).toBeFalsy();
    });
    it('should return false if field is disabled and not emit a select all event', () => {
      component.disabled = true;
      spyOn(component.onDeSelectAll, 'emit');
      spyOn(component.onSelectAll, 'emit');
      expect(component.onSelectAll.emit).not.toHaveBeenCalled();
      expect(component.onDeSelectAll.emit).not.toHaveBeenCalled();
    });
  });

  describe('closeDropdown', () => {
    it('should set defaultOpen to false', () => {
      expect(component.settings.defaultOpen).toBeFalsy();
    });
    it('should reset filter text', () => {
      component.settings.clearSearchFilter = true;
      expect(component.filter.text).toBeFalsy();
    });
    it('should call event emitter', () => {
      spyOn(component.onDropDownClose, 'emit');
      component.closeDropdown();
      expect(component.onDropDownClose.emit).toHaveBeenCalled();
    });
  });

  describe('toggleDropdown', () => {
    it('do nothing if disabled and single selection', () => {
      component.disabled = true;
      component.settings.singleSelection = true;
      expect(
        component.toggleDropdown({
          preventDefault: () => {},
        })
      ).toBeFalsy();
    });
    it('do set the opposite of open/close (open)', () => {
      component.disabled = false;
      component.settings.singleSelection = false;
      component.settings.defaultOpen = false;
      spyOn(component.onDropDownClose, 'emit');
      component.toggleDropdown({
        preventDefault: () => {},
      });
      expect(component.settings.defaultOpen).toBeTruthy();
    });

    it('do set the opposite of open/close (closed)', () => {
      component.disabled = false;
      component.settings.singleSelection = false;
      component.settings.defaultOpen = true;
      spyOn(component.onDropDownClose, 'emit');
      component.toggleDropdown({
        preventDefault: () => {},
      });
      expect(component.settings.defaultOpen).toBeFalsy();
      expect(component.onDropDownClose.emit).toHaveBeenCalled();
    });
  });

  describe('setComponent', () => {
    it('should define the following', () => {
      component.setComponent();
      expect(component.settings).toBeDefined();
      expect(component.filter).toBeDefined();
      expect(component.data).toBeDefined();
    });
  });

  describe('setData', () => {
    it('should define the following', () => {
      component.setComponent();
      expect(component._sourceDataType).toBeDefined();
      expect(component._sourceDataFields).toBeDefined();
      expect(component.data).toBeDefined();
    });
  });

  describe('setSettings', () => {
    it('should define the following', () => {
      component.setSettings(component.defaultSettings);
      expect(component.settings).toBe(component.defaultSettings);
    });
    it('should define the following if empty', () => {
      component.setSettings(null);
      expect(component.settings).toBe(component.defaultSettings);
    });
  });

  describe('onFilterTextChange', () => {
    it('should define the following', fakeAsync((): void => {
      spyOn(component.onFilterChange, 'emit');
      component.onFilterTextChange({
        preventDefault: () => {},
      });
      tick(1000);
      expect(component.onFilterChange.emit).toHaveBeenCalled();
    }));
  });

  describe('onItemClick', () => {
    it('should return false if item is disabled', () => {
      component.disabled = true;
      expect(component.onItemClick(null, null)).toBeFalsy();
    });
  });

  describe('registerOnChange', () => {
    it('should set onChangeCallback', () => {
      component.registerOnChange('test');
      expect(component.onChangeCallback).toBeDefined();
    });
  });

  describe('registerOnTouched', () => {
    it('should set onTouchedCallback', () => {
      component.registerOnTouched('test');
      expect(component.onTouchedCallback).toBeDefined();
    });
  });

  describe('trackByFn', () => {
    it('should return item id', () => {
      expect(component.trackByFn(1, { id: 2 })).toBe(2);
    });
  });

  describe('isSelected', () => {
    it('should show selected', () => {
      expect(component.isSelected(null)).toBeFalsy();
    });
  });

  describe('isLimitSelectionReached', () => {
    it('should return if limit adn selecterd are in parity', () => {
      component.settings.limitSelection = 1;
      component.selectedItems = [{ id: 1, text: 'arvydas sabonis' }];
      expect(component.isLimitSelectionReached()).toBeTruthy();
    });
  });

  describe('itemShowRemaining', () => {
    it('should calculate items remaining', () => {
      component.settings.itemsShowLimit = 0;
      component.selectedItems = [{ id: 1, text: 'arvydas sabonis' }];
      expect(component.itemShowRemaining()).toBe(1);
    });
  });

  describe('removeSelected', () => {
    it('should remove items by matching ids', () => {
      const item = { id: 1, text: 'arvydas sabonis' };
      component.selectedItems = [item];
      spyOn(component.onDeSelect, 'emit');
      component.removeSelected(item);
      expect(component.selectedItems.length).toBe(0);
      expect(component.onDeSelect.emit).toHaveBeenCalled();
    });
  });

  describe('emittedValue', () => {
    it('should objectify array', () => {
      expect(component.emittedValue(null).length).toBe(0);
      expect(component.emittedValue([{ id: 1 }]).length).toBe(1);
    });
  });
});

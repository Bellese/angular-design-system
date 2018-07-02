import {
  trigger,
  style,
  transition,
  animate,
  state
} from "@angular/animations";

export const Animations = {
  animations: [
    trigger('expansionTrigger', [
      state('true', style({
        height: '*'
      })),
      state('false',  style({
        height: 0
      })),
      transition('false => true', animate(1000)),
      transition('true => false', animate(1000))
    ])
  ]
};

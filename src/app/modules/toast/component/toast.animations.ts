import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

export const Animations = {
  animations: [
    trigger('flyInOut', [
      state('inactive', style({
        transform: 'translate3d(100%, 0, 0)',
        opacity: 0,
      })),
      transition('inactive => active', animate('400ms ease-out', keyframes([
        style({
          transform: 'none',
          opacity: 1,
        }),
      ]))),
      transition('active => removed', animate('400ms ease-out', keyframes([
        style({
          opacity: 1,
        }),
        style({
          transform: 'translate3d(100%, 0, 0)',
          opacity: 0,
        }),
      ]))),
    ]),
  ]
};

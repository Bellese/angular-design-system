import { trigger, state, style, transition, animate, keyframes, AnimationTriggerMetadata } from '@angular/animations';

export const Animations = {
    animations: [
        trigger('expansionTrigger', [
            transition(':enter', [
                style({
                    height: '0'
                }),
                animate('200ms linear', style({ height: '*' }))
            ]),
            transition(':leave', [
                style({
                    height: '*'
                }),
                animate('100ms 100ms linear', style({ height: '0' }))
            ])
        ]),
        trigger('fadeInTrigger', [
            transition(':enter', [
                style({
                    opacity: '0'
                }),
                animate('100ms 100ms', style({ opacity: 1 }))
            ]),
            transition(':leave', [
                animate('200ms', style({ opacity: 0 }))
            ])
        ])
    ]
};

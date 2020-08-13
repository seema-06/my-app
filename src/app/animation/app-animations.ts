import { trigger , state, style, animate, transition } from '@angular/animations';

export function flyInout() {
 return trigger ( 'flyInout', [
     state('*', style({
         opacity: 1,
         transform: 'translateX(0)'
     })),
     transition(':enter', [
         style({transform: 'translateX(-100%)', opacity: 0}),
         animate('500ms ease-in')
     ]),
     transition(':leave', [
        animate('500ms ease-out', style({transform: 'translateX(100%)' , opacity: 0 }))

    ] )
 ] );
}

export function expand() {
    return trigger ( 'expand', [
        state('*', style({
            opacity: 1,
            transform: 'translateX(0)'
        })),
        transition(':enter', [
            style({transform: 'translatey(-50%)', opacity: 0}),
            animate('200ms ease-in')
        ])
    ] );
   }


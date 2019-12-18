import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, transition, animate, style } from '@angular/animations';

@Component({
  selector: 'app-transitions',
  templateUrl: './transitions.component.html',
  styleUrls: ['./transitions.component.sass'],
  animations: [
    trigger('transition1', [
      state('in', style({ transform: 'translateX(0)' })),
      transition('void => *', [
        style({ transform: 'translateX(-100%)' }),
        animate(500)
      ]),
      transition('* => void', [
        animate(100, style({ transform: 'translateX(100%)' }))
      ])
    ]),
    trigger('transition2', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('0.1s', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('0.1s', style({ opacity: 0 }))
      ])
    ]),
  ]
})

@Input('box1')

export class TransitionsComponent implements OnInit {

  box1: boolean;
  box2: boolean;

  constructor() {
    this.box1 = false;
    this.box2 = false;

  }

  showBoxOne() {
    this.box1 = true;
    this.box2 = false;

  }

  showBoxTwo() {
    this.box1 = false;
    this.box2 = true;
  }

  ngOnInit() {


  }

}

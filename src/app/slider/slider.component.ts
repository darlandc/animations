import { Component, OnInit } from '@angular/core';
import { trigger, state, transition, animate, style } from '@angular/animations';
import { Imagem } from './image.model';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.sass'],
  animations: [
    trigger('banner', [
      state('hidden', style({
        opacity: 0,
        'margin-left': '50px',
      })),
      state('visible', style({
        opacity: 1,
      })),
      transition('hidden <=> visible', animate('0.5s ease-in'))
    ])
  ]
})

export class SliderComponent implements OnInit {

  public estado = 'visible';

  public imagens: Imagem[] = [
    { estado: 'visible', url: '/assets/img_1.png' },
    { estado: 'hidden', url: '/assets/img_2.png' },
    // { estado: 'hidden', url: '/assets/img_3.png' },
    // { estado: 'hidden', url: '/assets/img_4.png' },
    // { estado: 'hidden', url: '/assets/img_5.png' }
  ];

  ngOnInit() {
    setTimeout(() => this.slider(), 1000);
    console.log(1, 'init app');
  }


  public slider(): void {

    console.log(2, 'function slider')

    let idx: number;

    for (let i: number = 0; i <= 1; i++) {

      console.log(i, 'i');

      if (this.imagens[i].estado === 'visible') {
        this.imagens[i].estado = 'hidden';
        console.log(i);

        idx = i === 1 ? 0 : i + 1;

        break;
      }

    }
    console.log(this.imagens[idx], 'idx');
    this.imagens[idx].estado = 'visible';

    setTimeout(() => this.slider(), 3000);

  }


  // public toggleState(): void {
  //   this.state = this.state === 'visible' ? 'hidden' : 'visible';
  // }

}

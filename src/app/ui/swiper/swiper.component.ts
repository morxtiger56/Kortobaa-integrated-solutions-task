import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgIconComponent } from '@ng-icons/core';

@Component({
    selector: 'k-swiper',
    standalone: true,
    imports: [CommonModule, NgIconComponent],
    templateUrl: './swiper.component.html',
    styleUrls: ['./swiper.component.css']
})
export class SwiperComponent {

}

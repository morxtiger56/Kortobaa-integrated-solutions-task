import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageRoutingModule } from './home-page-routing.module';
import { HomePageComponent } from './home-page.component';
import { CardComponent } from '../ui/card/card.component';
import { ButtonComponent } from '../ui/button/button.component';
import { SwiperComponent } from '../ui/swiper/swiper.component';


@NgModule({
    declarations: [
        HomePageComponent
    ],
    imports: [
        CommonModule,
        HomePageRoutingModule,
        CardComponent,
        ButtonComponent,
        SwiperComponent
    ]
})
export class HomePageModule { }

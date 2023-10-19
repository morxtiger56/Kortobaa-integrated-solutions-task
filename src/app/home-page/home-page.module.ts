import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { CardComponent } from '../ui/card/card.component';

@NgModule({
    declarations: [
        HomePageComponent,
    ],
    imports: [
        CommonModule,
        CardComponent
    ]
})
export class HomePageModule { }

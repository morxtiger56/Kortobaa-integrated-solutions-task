import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  imports:[CommonModule],
  standalone:true,
  styleUrls: ['./card.component.css']
})
export class CardComponent {

}

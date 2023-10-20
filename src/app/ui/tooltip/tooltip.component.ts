import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'k-tooltip',
  imports:[CommonModule],
  styleUrls:["./tooltip.component.css"],
  standalone:true,
  templateUrl: './tooltip.component.html',
})
export class TooltipComponent {
    @Input() body = "";

}

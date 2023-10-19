import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'k-input',
    templateUrl: './input.component.html',
    imports:[CommonModule],
    standalone: true,
    styleUrls: ['./input.component.css'],
})
export class InputComponent {
    @Input() name = "search"
}

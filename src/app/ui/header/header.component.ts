import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgIconComponent, provideIcons, provideNgIconsConfig } from '@ng-icons/core';
import { featherSearch, featherUser, featherShoppingCart } from '@ng-icons/feather-icons';
import { InputComponent } from '../input/input.component';
import { ButtonComponent } from '../button/button.component';

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [CommonModule, NgIconComponent, InputComponent, ButtonComponent],
    providers: [
        provideIcons({ featherSearch, featherUser, featherShoppingCart }),
        provideNgIconsConfig({
            color: '#302ca2'
        })
    ],
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent {

}

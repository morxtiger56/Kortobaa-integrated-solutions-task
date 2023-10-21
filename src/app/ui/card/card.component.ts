import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroArrowsRightLeftSolid, heroStarSolid } from "@ng-icons/heroicons/solid";
import { heroStar } from "@ng-icons/heroicons/outline";
import { matAddShoppingCartOutline, matShareOutline, matFavoriteBorderOutline, matCompareArrowsOutline } from "@ng-icons/material-icons/outline";
import { ButtonComponent } from '../button/button.component';
import { TooltipComponent } from '../tooltip/tooltip.component';
import { ChipComponent } from '../chip/chip.component';

@Component({
    selector: 'k-card',
    templateUrl: './card.component.html',
    imports: [CommonModule, NgIconComponent, ButtonComponent, TooltipComponent, ChipComponent],
    providers: [provideIcons({ heroArrowsRightLeftSolid, heroStar, heroStarSolid, matAddShoppingCartOutline, matShareOutline, matFavoriteBorderOutline, matCompareArrowsOutline })],
    standalone: true,
    styleUrls: ['./card.component.css']
})


export class CardComponent {
    @Input() title = "";
    @Input() originalPrice = 0;
    @Input() imageUrl = "";
    @Input() price = 0;
    @Input() rating = 0;
    @Input() variation: "full" | "mini" = "full";
}

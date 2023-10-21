import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { cn } from "../../../lib/utils";


export const chipVariations = {
    base: "flex rounded-full border px-3 py-1 text-sm items-center font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
    default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
    secoundry:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
    tertairy:"border-transparent bg-accent text-secondary-foreground hover:bg-accent/80",
}


@Component({
    selector: 'k-chip',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './chip.component.html',
})

export class ChipComponent implements OnInit {

    @Input() variation: keyof typeof chipVariations = "default"
    @Input() innerClass = ""
    classSet= ""
    ngOnInit(): void {
        this.classSet = cn(chipVariations.base, chipVariations[this.variation], this.innerClass)
    }
}

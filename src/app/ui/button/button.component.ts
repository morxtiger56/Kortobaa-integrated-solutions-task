import { Component, Input, OnInit } from '@angular/core';
import { cn } from "../../../lib/utils";
import { CommonModule } from '@angular/common';


export const buttonVariations = {
    base: "ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
    default: "items-center justify-start gap-1 rounded-xl bg-primary px-2 py-2 text-primary-foreground transition-colors hover:bg-primary/80 flex",
    ghost: "px-2 py-2 hover:bg-primary/5 rounded-lg",
    secoundry:"flex gap-2 items-center justify-center rounded-lg bg-primary/5 px-2 py-1 hover:bg-primary/10",
    outline: "gap-2 flex justify-center hover:bg-primary/10 rounded-lg px-2 py-2 font-bold text-primary outline outline-1 outline-primary"
}



@Component({
    selector: 'k-button',
    templateUrl: './button.component.html',
    imports: [CommonModule],
    standalone: true,
    styleUrls: ['./button.component.css']
})



export class ButtonComponent implements OnInit {
    @Input() variation: keyof typeof buttonVariations = "default"
    @Input() innerClass = ""
    classSet: string = ""
    constructor() {
    }

    ngOnInit(): void {
        this.classSet = cn(buttonVariations.base, buttonVariations[this.variation], this.innerClass)
    }

}

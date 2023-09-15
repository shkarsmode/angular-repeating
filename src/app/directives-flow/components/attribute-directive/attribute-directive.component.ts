import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-attribute-directive',
    templateUrl: './attribute-directive.component.html',
    styleUrls: ['./attribute-directive.component.scss'],
})
export class AttributeDirectiveComponent implements OnInit {

    public name: string = 'attribute-directive';

    constructor(
        private cdr: ChangeDetectorRef
    ) {}

    public ngOnInit(): void {
        setTimeout(() => {
            this.name = 'The name was changed';
            this.cdr.markForCheck();
        }, 2000);
    }
}

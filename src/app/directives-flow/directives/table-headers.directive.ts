import { Directive, Input, TemplateRef } from '@angular/core';

@Directive({
    selector: '[appTableHeader]',
})
export class TableHeaderDirective {

    public nameOfHeader: string = '';
    @Input() set appTableHeader(value: string) {
        this.nameOfHeader = value.toLowerCase();
    }

    constructor(public templateRef: TemplateRef<string>) {}
}

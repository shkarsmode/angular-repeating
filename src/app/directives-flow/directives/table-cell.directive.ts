import { Directive, Input, TemplateRef } from '@angular/core';

@Directive({
    selector: '[appTableCell]',
})
export class TableCellDirective {

    @Input() appTableCell: string = '';
    constructor(
        public templateRef: TemplateRef<{$implicity: string}>
    ) {}
}

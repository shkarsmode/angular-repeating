import { Directive, Input, TemplateRef } from '@angular/core';

@Directive({
    selector: '[appTableCell]',
})
export class TableCellDirective {

    public tableCellName: string = '';
    @Input() set appTableCell(cell: string) {
        this.tableCellName = cell.toLowerCase();
    }

    constructor(
        public templateRef: TemplateRef<{$implicity: string}>
    ) {}
}

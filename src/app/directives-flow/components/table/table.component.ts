import { Component, ContentChildren, Input, QueryList, TemplateRef } from '@angular/core';
import { TableCellDirective } from '../../directives/table-cell.directive';
import { TableHeaderDirective } from '../../directives/table-header.directive';

@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.scss'],
})
export class TableComponent {

    @Input() tableContent: Array<{ [key: string]: string | number }> = [];
    @Input() tableHeaderKeys: Array<string> = [];

    @ContentChildren(TableHeaderDirective) headerTemplates: QueryList<TableHeaderDirective>;
    @ContentChildren(TableCellDirective) cellTemplates: QueryList<TableCellDirective>;

    public getTemplateRefOfHeaderBasedOnName(colName: string): TemplateRef<string> | undefined {
        const tableHeaderDirective = 
            this.headerTemplates.find(
                template => template.nameOfHeader === colName.toLowerCase()
            );

        return tableHeaderDirective?.templateRef;
    }

    public getTemplateRefOfCellBasedOnName(colName: string): TemplateRef<unknown> | undefined {
        const tableCellDirective = 
            this.cellTemplates.find(
                template => template.tableCellName === colName.toLowerCase()
            );

        return tableCellDirective?.templateRef;
    }
}

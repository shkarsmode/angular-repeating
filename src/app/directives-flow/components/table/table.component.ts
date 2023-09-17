import { Component, ContentChildren, Input, QueryList, TemplateRef } from '@angular/core';
import { TableHeaderDirective } from '../../directives/table-headers.directive';

@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.scss'],
})
export class TableComponent {

    @Input() tableContent: Array<{ [key: string]: string | number }> = [];
    @Input() tableHeaderKeys: Array<string> = [];
    @ContentChildren(TableHeaderDirective) headerTemplates: QueryList<TableHeaderDirective>;

    public getTemplateRefBasedOnName(header: string): TemplateRef<string> | undefined {
        console.log(this.headerTemplates);
        const tableHeaderDirective = 
            this.headerTemplates.find(
                template => template.nameOfHeader === header.toLowerCase()
            );

        return tableHeaderDirective?.templateRef;
    }
}

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AttributeDirectiveComponent } from './components/attribute-directive/attribute-directive.component';
import { StructuralDirectiveComponent } from './components/structural-directive/structural-directive.component';
import { TableComponent } from './components/table/table.component';
import { DirectivesRoutingModule } from './directives-routing.module';
import { DirectivesComponent } from './directives.component';
import { ExampleDirective } from './directives/example.directive';
import { ForDirective } from './directives/for.directive';
import { HighlightDirective } from './directives/highlight.directive';
import { IfRoleDirective } from './directives/role.directive';
import { TableHeaderDirective } from './directives/table-header.directive';
import { TemplateDirective } from './directives/template.directive';
import { TooltipDirective } from './directives/tooltip.directive';
import { TableCellDirective } from './directives/table-cell.directive';

@NgModule({
    declarations: [
        DirectivesComponent,
        AttributeDirectiveComponent,
        HighlightDirective,
        ExampleDirective,
        TemplateDirective,
        TooltipDirective,
        StructuralDirectiveComponent,
        IfRoleDirective,
        ForDirective,
        TableComponent,
        TableHeaderDirective,
        TableCellDirective
    ],
    imports: [CommonModule, DirectivesRoutingModule]
})
export class DirectivesModule {}

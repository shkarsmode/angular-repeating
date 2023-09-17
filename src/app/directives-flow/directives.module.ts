import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AttributeDirectiveComponent } from './components/attribute-directive/attribute-directive.component';
import { StructuralDirectiveComponent } from './components/structural-directive/structural-directive.component';
import { DirectivesRoutingModule } from './directives-routing.module';
import { DirectivesComponent } from './directives.component';
import { ExampleDirective } from './directives/example.directive';
import { HighlightDirective } from './directives/highlight.directive';
import { IfRoleDirective } from './directives/role.directive';
import { TemplateDirective } from './directives/template.directive';
import { TooltipDirective } from './directives/tooltip.directive';
import { ForDirective } from './directives/for.directive';

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
    ],
    imports: [CommonModule, DirectivesRoutingModule]
})
export class DirectivesModule {}

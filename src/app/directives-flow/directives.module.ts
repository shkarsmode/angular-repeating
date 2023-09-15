import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AttributeDirectiveComponent } from './components/attribute-directive/attribute-directive.component';
import { DirectivesRoutingModule } from './directives-routing.module';
import { DirectivesComponent } from './directives.component';
import { HighlightDirective } from './directives/highlight.directive';
import { ExampleDirective } from './directives/example.directive';
import { TemplateDirective } from './directives/template.directive';
import { TooltipDirective } from './directives/tooltip.directive';

@NgModule({
  declarations: [
    DirectivesComponent,
    AttributeDirectiveComponent,
    HighlightDirective,
    ExampleDirective,
    TemplateDirective,
    TooltipDirective
  ],
  imports: [
    CommonModule,
    DirectivesRoutingModule
  ]
})
export class DirectivesModule { }

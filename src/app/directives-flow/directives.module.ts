import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AttributeDirectiveComponent } from './components/attribute-directive/attribute-directive.component';
import { DirectivesRoutingModule } from './directives-routing.module';
import { DirectivesComponent } from './directives.component';
import { HighlightDirective } from './directives/highlight.directive';

@NgModule({
  declarations: [
    DirectivesComponent,
    AttributeDirectiveComponent,
    HighlightDirective
  ],
  imports: [
    CommonModule,
    DirectivesRoutingModule
  ]
})
export class DirectivesModule { }

import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { TypescriptRoutingModule } from './typescript-routing.module';
import { TypescriptComponent } from './typescript.component';


@NgModule({
  declarations: [
    TypescriptComponent,
  ],
  imports: [
    CommonModule,
    TypescriptRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TypescriptModule { }

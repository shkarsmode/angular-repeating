import { CommonModule, DatePipe } from '@angular/common';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BasicPipesComponent } from './components/basic-pipes/basic-pipes.component';
import { PipesRoutingModule } from './pipes-routing.module';
import { PipesComponent } from './pipes.component';
import { AppDatePipe } from './pipes/date.pipe';

@NgModule({
    declarations: [
        PipesComponent, 
        BasicPipesComponent, 
        AppDatePipe
    ],
    imports: [CommonModule, PipesRoutingModule],
    providers: [
        DatePipe,
        {
            provide: LOCALE_ID, useValue: 'ru'
        }
    ]
})
export class PipesModule {}

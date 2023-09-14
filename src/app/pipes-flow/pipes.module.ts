import { CommonModule, DatePipe } from '@angular/common';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BasicPipesComponent } from './components/basic-pipes/basic-pipes.component';
import { PipesRoutingModule } from './pipes-routing.module';
import { PipesComponent } from './pipes.component';
import { AppDatePipe } from './pipes/date.pipe';
import { AsyncPipesComponent } from './components/async-pipes/async-pipes.component';
import { DumbComponent } from './components/async-pipes/dumb/dumb.component';
import { AppAsyncPipe } from './pipes/app-async.pipe';

@NgModule({
    declarations: [
        PipesComponent, 
        BasicPipesComponent, 
        AppDatePipe, AsyncPipesComponent, DumbComponent, AppAsyncPipe
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

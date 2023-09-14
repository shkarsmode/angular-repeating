import { Component } from '@angular/core';

@Component({
    selector: 'app-basic-pipes',
    templateUrl: './basic-pipes.component.html',
    styleUrls: ['./basic-pipes.component.scss'],
})
export class BasicPipesComponent {
  
    public date: Date = new Date();
}

import { Component } from '@angular/core';

@Component({
    selector: 'app-basic-pipes',
    templateUrl: './basic-pipes.component.html',
    styleUrls: ['./basic-pipes.component.scss'],
})
export class BasicPipesComponent {

    public text: string = 'Some text for pipes';
    public decimalNumber: number = 10/3
    public array: Array<number> = [1, 2, 3, 4, 5, 6];
    public obj: { name: string, surname: string } = {
        name: 'Daniil',
        surname: 'Shkarupa'
    };
    public date: Date = new Date();
}

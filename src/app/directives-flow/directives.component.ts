import { Component } from '@angular/core';

@Component({
    selector: 'app-directives',
    templateUrl: './directives.component.html',
    styleUrls: ['./directives.component.scss']
})
export class DirectivesComponent {

    public text: string = 'Hello, world!';
    public readonly Object: typeof Object = Object;
    public tableContent: Array<{ [key: string]: string | number }> = [
        { id: 1, dob: '29-12-2001', name: 'Shkarupa', surname: 'Shkarupa' },
        { id: 2, dob: '25-1-2020', name: 'Maksim', surname: 'Barishov' },
        { id: 3, dob: '10-10-2035', name: 'Nastya', surname: 'NsTasy' },
        { id: 4, dob: '3-6-1999', name: 'Misha', surname: 'Soroka' }
    ];
    public tableHeaderKeysSorted: Array<string> = ['id', 'name', 'surname', 'dob'];
    public preferredNamesOfTable: {[ key: string]: string } = {
        id: 'Identify', name: 'First Name', dob: 'Date of Birth'
    };
}

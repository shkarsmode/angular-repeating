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
        { id: 1, dob: '12-29-2001', name: 'Shkarupa', surname: 'Shkarupa' },
        { id: 2, dob: '01-25-2001', name: 'Maksim', surname: 'Barishov' },
        { id: 3, dob: '10-10-2012', name: 'Nastya', surname: 'NsTasy' },
        { id: 4, dob: '03-06-1999', name: 'Misha', surname: 'Soroka' }
    ];
    
    public tableHeaderKeysSorted: Array<string> = [
        'id', 'name', 'surname', 'dob', 'fullName', 'age'
    ];
    public preferredNamesOfTable: {[ key: string]: string } = {
        id: 'Identify', 
        name: 'First Name', 
        dob: 'Date of Birth', 
        fullName: 'Full Name',
        age: 'Years Old'
    };

    public getFullYearsOldOfUser(dateOfBirth: string | Date): number {
        dateOfBirth = new Date(dateOfBirth);
        const currentDate = new Date();
        let diffYears = currentDate.getFullYear() - dateOfBirth.getFullYear();

        if (currentDate.getMonth() < dateOfBirth.getMonth()) {
            --diffYears;
        }

        return diffYears;
    }
}

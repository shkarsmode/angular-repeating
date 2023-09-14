import { Component } from '@angular/core';
import { Observable, delay, map, of } from 'rxjs';

export interface IUser {
    name: string;
    city: string;
    years: number;
}

const obj: IUser = {
    name: 'Daniil',
    city: 'Sumy',
    years: 21
}

@Component({
    selector: 'app-async-pipes',
    templateUrl: './async-pipes.component.html',
    styleUrls: ['./async-pipes.component.scss']
})
export class AsyncPipesComponent {

    public name$: Observable<string> = of('Daniil').pipe(delay(1500));
    public user$: Observable<IUser> = of(obj).pipe(delay(1000));

    public array$: Observable<number[]> = of([1, 2, 3, 4, 5]).pipe(delay(1000));

    public newUser$ = this.user$.pipe(
        map(user => ({
            ...user,
            years: user.years + 5
        }))
    );


    public deleteNameOfUser(user: IUser): void {
        console.log('user', user);
        // this.user$ = this.user$.pipe(map(user => ({...user, name: ''})))
        this.user$ = of(obj).pipe(map(user => ({...user, name: ''})))
    }
}

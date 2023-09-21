import { Component, OnInit } from '@angular/core';
import { Task1, Task2, calculate, mul2Args, sum, sum2Args, sumWithUnlimitedArgs } from './utils/task-solving.class';

@Component({
    selector: 'app-typescript',
    templateUrl: './typescript.component.html',
    styleUrls: ['./typescript.component.scss'],
})
export class TypescriptComponent implements OnInit {

    private obj1: { age: number, name: string } = { age: 21, name: 'Daniil' };
    private obj2: { job: string } = { job: 'Angular Developer' };

    public ngOnInit(): void {
        this.createInstanceOfCardComponent();
        this.solvingTasks();
        const obj = this.assignObjects(this.obj1, this.obj2);
        // console.log(obj.name, obj.age, obj.job);

    }

    private assignObjects<T extends object, R extends object>(a: T, b: R): T & R {
        return Object.assign({}, a, b);
    }

    private createInstanceOfCardComponent(): void {
        const card = new CardComponent('myCard');
    }

    private solvingTasks(): void {
        const array = ['banana', 'kywi', 'apple', 'kywi', 'kywi', 'banana'];
        const arrayOfNumbers = [1, 2, 3, 4, 5, 6, 10];

        const taks1 = new Task1(array);
        const taks2 = new Task2(...arrayOfNumbers);

        console.log(taks1.solveTheTask());
        console.log(taks2.solveTheTask());

        console.log(sum(2)(3));
        console.log('unlimit', sumWithUnlimitedArgs(3)(5)(6)(7)());
        
        console.log('calculate sum', calculate(sum2Args)(2)(3));
        console.log('calculate mul', calculate(mul2Args)(3)(3));
    }
    
}

function ComponentDec(config: Component) {
    return function
        <T extends { new(...args: any[]): object }>
    (Constructor: T): T {
        return class extends Constructor {
            constructor(...args: any[]) {
                super(...args);

                const {selector, template} = config;
                if (selector && template) {
                    const el = document.querySelector(selector) as HTMLElement;
                    el.innerHTML = template;
                }
            }
        }
    }
}

@ComponentDec({
    selector: 'app-card',
    template: `
        <div>
            <h1>Hello, world!</h1>
            <p>it's my component with custom decorator</p>
        </div>
    `
})
export class CardComponent {
    constructor(public name: string) {}
}
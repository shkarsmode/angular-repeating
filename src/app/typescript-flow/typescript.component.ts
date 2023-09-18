import { Component, OnInit } from '@angular/core';

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
        const obj = this.assignObjects(this.obj1, this.obj2);
        // console.log(obj.name, obj.age, obj.job);
        
    }

    private assignObjects<T extends object, R extends object>(a: T, b: R): T & R {
        return Object.assign({}, a, b);
    }

    private createInstanceOfCardComponent(): void {
        const card = new CardComponent('myCard');
    }
}




function ComponentDec(config: Component) {
    return function
        <T extends { new(...args: any[]): object }>
    (Constructor: T) {
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
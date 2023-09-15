import { Directive, ElementRef, OnInit } from '@angular/core';
import { AttributeDirectiveComponent } from '../components/attribute-directive/attribute-directive.component';

@Directive({
    selector: 'app-attribute-directive[appExample]',
})
export class ExampleDirective implements OnInit {

    constructor(
        private host: ElementRef,
        private component: AttributeDirectiveComponent
    ) {}


    public ngOnInit(): void {}
}

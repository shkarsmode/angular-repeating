import { Directive, Optional, TemplateRef } from '@angular/core';

@Directive({
    selector: '[appTemplate]',
})
export class TemplateDirective {
    
    constructor(
        @Optional() private template: TemplateRef<any>
    ) {
        console.log(template);
        
    }
}

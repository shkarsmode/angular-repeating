import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

export enum Roles {
    Admin = 'admin',
    User = 'user'
}

@Directive({
    selector: '[appIfRole]',
})
export class IfRoleDirective {

    @Input()
    public set appIfRole(role: Roles) {
        this.viewContainerRef.clear();

        if (role === Roles.Admin) {
            this.viewContainerRef.createEmbeddedView(this.templateRef);
        }        
    }

    constructor(
        private templateRef: TemplateRef<any>,
        private viewContainerRef: ViewContainerRef
    ) {}
}

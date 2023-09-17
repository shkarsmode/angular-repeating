import { Directive, Input, OnChanges, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
    selector: '[appFor][appForOf]'
})
export class ForDirective implements OnChanges {

    private isSkipFirst: boolean = false;
    private array: Array<any> = [];

    @Input() 
    public set appForSkipFirst(isSkipFirst: boolean) {
        this.isSkipFirst = !!isSkipFirst;
    }

    @Input()
    public set appForOf(array: any[]) {
        this.array = array;
    }

    constructor(
        private templateRef: TemplateRef<any>,
        private viewContainerRef: ViewContainerRef
    ) {}

    public ngOnChanges(): void {
        this.showEmbeddedView();
    }

    private showEmbeddedView(): void {
        this.viewContainerRef.clear();
        this.array.forEach((item: any, index) => {
            if (this.isSkipFirst && index === 0) return;
            
            this.viewContainerRef.createEmbeddedView(this.templateRef, { $implicit: item, index });
        });
    }
}

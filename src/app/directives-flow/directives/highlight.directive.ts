import { Directive, HostBinding, HostListener, Optional } from '@angular/core';
import { AttributeDirectiveComponent } from '../components/attribute-directive/attribute-directive.component';

@Directive({
	selector: '[appHighlight]',
})
export class HighlightDirective {

	constructor(
		@Optional() private component: AttributeDirectiveComponent
	) {}

	@HostBinding('style.background')
	public backgroundColor: string = 'none';

	@HostListener('mouseenter')
	public mouseEnter(): void {
		this.backgroundColor = 'yellow';	
	}

	@HostListener('mouseleave')
	public mouseLeave(): void {
		this.backgroundColor = 'none';	
	}
}
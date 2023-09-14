import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
	selector: '[appHighlight]',
})
export class HighlightDirective {

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
import { Directive, ElementRef, HostBinding, HostListener, Input, OnChanges, OnInit, Renderer2, SimpleChanges } from '@angular/core';

@Directive({
    selector: '[appTooltip]',
})
export class TooltipDirective implements OnInit, OnChanges {

    @Input() public appTooltip: string = '';
    @Input() public appTooltipDelay: string = '0';

    @HostBinding('class.active-tooltip') 
    public isActiveTooltip: boolean = false;

    private divElement: HTMLDivElement;
    private stylesForDivElement: { [key: string]: string };
    private stylesForWrapElement: { [key: string]: string };

    constructor(
        private host: ElementRef<HTMLElement>,
        private renderer: Renderer2
    ) {}

    public ngOnChanges(changes: SimpleChanges): void {
        if (!changes.hasOwnProperty('appTooltip')) return;

        const { previousValue, currentValue } = changes['appTooltip'];

        if (previousValue && previousValue !== currentValue) {
            this.setTextForTooltip(true);
        }
    }

    public ngOnInit(): void {
        this.determineBasicStylesForTooltip();
        this.createTooltipAndAddToDOM();
        this.setTextForTooltip();
    }

    private determineBasicStylesForTooltip(): void {
        this.stylesForDivElement = {
            opacity: '0',
            position: 'absolute',
            padding: '5px',
            background: 'grey',
            transition: 'opacity 0.3s',
            'font-size': '14px'
        };

        this.stylesForWrapElement = {
            height: '0',
            position: 'relative',
            bottom: '-5px',
            left: '30px',
            'max-width': '200px',
            'pointer-events': 'none'
        };
    }

    private createTooltipAndAddToDOM(): void {
        const div = this.renderer.createElement('div');
        const wrap = this.renderer.createElement('div');

        this.divElement = div;

        for (const prop in this.stylesForDivElement) {
            this.renderer.setStyle(div, prop, this.stylesForDivElement[prop]);
        }

        for (const prop in this.stylesForWrapElement) {
            this.renderer.setStyle(wrap, prop, this.stylesForWrapElement[prop]);
        }
        
        this.renderer.appendChild(this.host.nativeElement, wrap);
        this.renderer.appendChild(wrap, div);
    }

    private setTextForTooltip(isTextChanged: boolean = false): void {
        if (isTextChanged) {
            this.divElement.innerHTML = '';
        }

        const text = this.renderer.createText(this.appTooltip);
        this.renderer.appendChild(this.divElement, text);
    }

    @HostListener('mouseenter')
    public mouseEnter(): void {
        this.renderer.setStyle(this.divElement, 'transition-delay', this.appTooltipDelay + 'ms');
        this.divElement.style.opacity = '1';
        this.isActiveTooltip = true;
    }

    @HostListener('mouseleave')
    public mouseLeave(): void {
        this.renderer.setStyle(this.divElement, 'transition-delay', '0ms');
        this.divElement.style.opacity = '0';
        this.isActiveTooltip = false;
    }

}

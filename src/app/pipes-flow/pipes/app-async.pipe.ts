import { ChangeDetectorRef, OnDestroy, Pipe, PipeTransform } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Pipe({
    name: 'appAsync',
    pure: false
})
export class AppAsyncPipe implements PipeTransform, OnDestroy {

    private observable?: Observable<any>;
    private subscription: Subscription;
    private value?: any;

    constructor(private cdr: ChangeDetectorRef) {}

    public transform<T>(observable: Observable<T>): T | null {
        if (!observable) {
            this.dispose();
            return null;
        }

        if (!this.observable) {
            this.observable = observable;
            this.subscription = this.observable.subscribe(value =>{
                this.value = value;
                this.cdr.markForCheck();
            });
        }

        if (this.observable !== observable) {
            this.dispose();
            return this.transform(observable);
        }
        
        return this.value ?? null;
    }

    private dispose(): void {
        this.subscription?.unsubscribe();
        this.observable = undefined;
        this.value = undefined;
    }

    public ngOnDestroy(): void {
        this.subscription?.unsubscribe();
    }
}

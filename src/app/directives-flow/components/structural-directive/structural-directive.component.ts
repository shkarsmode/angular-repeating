import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject, interval, map, takeUntil, takeWhile } from 'rxjs';
import { Roles } from '../../directives/role.directive';

@Component({
    selector: 'app-structural-directive',
    templateUrl: './structural-directive.component.html',
    styleUrls: ['./structural-directive.component.scss'],
})
export class StructuralDirectiveComponent implements OnInit, OnDestroy {

    public currentRole: Roles = Roles.Admin;
    public array: string[] = ['hello', 'my', 'friend'];
    
    private readonly intervalInMS: number = 1500;
    private intervalRole$: Observable<Roles>;
    private destroy$: Subject<void> = new Subject();

    constructor(
        private cdr: ChangeDetectorRef
    ) {}

    public ngOnInit(): void {
        this.initIntervalRoleStream();
        this.subscribeOnChangeRoleAfterTimeout();
        this.changeArrayAfter2Seconds();
    }

    private changeArrayAfter2Seconds(): void {
        setTimeout(() => {
            this.array = [...this.array, 'wow'];
        }, 2000);
    }

    private subscribeOnChangeRoleAfterTimeout(): void {
        this.intervalRole$.subscribe(role => {
            this.cdr.markForCheck();
            this.currentRole = role;
        });
    }

    private initIntervalRoleStream(): void {
        this.intervalRole$ =
            interval(this.intervalInMS).pipe(
                takeUntil(this.destroy$),
                takeWhile(value => value < 5),
                map(value => value % 2 === 0 ? Roles.Admin : Roles.User),
            );
    }

    public ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }
}

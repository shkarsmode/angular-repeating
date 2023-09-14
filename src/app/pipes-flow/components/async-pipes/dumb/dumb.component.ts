import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IUser } from '../async-pipes.component';

@Component({
    selector: 'app-dumb',
    templateUrl: './dumb.component.html',
    styleUrls: ['./dumb.component.scss'],
})
export class DumbComponent {

    @Input() user: IUser;
    @Output() deleteName: EventEmitter<IUser> = new EventEmitter();

    public onDeleteName(user: IUser): void {
        this.deleteName.emit(user);
    }
}

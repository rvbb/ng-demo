import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { ProgressState } from './general.interface';

@Injectable()
export class SpinnerService {

    // Not care state of progress
    public show() {
        const el = document.getElementById('global-spinner');
        if (el) {
            el.style['display'] = 'block';
        }
    }

    public hide() {
        const el = document.getElementById('global-spinner');
        if (el) {
            el.style['display'] = 'none';
        }
    }

    // care loading state
    private progressSubject = new Subject<ProgressState>();
    progressState = this.progressSubject.asObservable();
    constructor() { }
    rocessing() {
        this.progressSubject.next(<ProgressState>{ display: true });
    }
    processed() {
        this.progressSubject.next(<ProgressState>{ display: false });
    }

}

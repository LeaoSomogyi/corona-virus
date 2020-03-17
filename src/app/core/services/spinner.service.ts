import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  visibility: BehaviorSubject<boolean>;

  constructor() {
    this.visibility = new BehaviorSubject(false);
  }

  show() {
    window.setTimeout(() => { this.visibility.next(true); }, 1);
  }

  hide() {
    window.setTimeout(() => { this.visibility.next(false); }, 1);
  }
}
import {Injectable} from '@angular/core';

import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private display: boolean = false;

  open(): boolean {
    return this.display = true;
  }

  close():boolean {
    return this.display = false;
  }

  getDisplay() {
    return this.display;
  }
}
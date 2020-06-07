import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilService {
  private apuntador = new BehaviorSubject<any>(null);
  ApuntadorAction$ = this.apuntador.asObservable();

  constructor() { }

  Variables(value: any): void {
    this.apuntador.next(value);
  }

}

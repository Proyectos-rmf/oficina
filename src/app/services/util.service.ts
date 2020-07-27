import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilService {
  private apuntador = new BehaviorSubject<any>(null);
  ApuntadorAction$ = this.apuntador.asObservable();
  public Error;

  constructor() { }

  Variables(value: any): void {
    this.apuntador.next(value);
  }

  Errores(Errors: string, tipo: string): string {
    this.Error = Errors;

    switch (tipo) {
      case 'required':
        this.Error = this.Error?.required;
        break;

      case 'minlength':
        this.Error = this.Error?.minlength;
        break;

      case 'minlength?':
        this.Error = this.Error?.minlength;
        this.Error = this.Error?.requiredLength;
        break;

      case 'pattern':
        this.Error = this.Error?.pattern;
        break;
    }
    return this.Error;
  }
}

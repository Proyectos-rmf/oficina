import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})

export class CrudService {

  constructor(private db: AngularFirestore) { }

  // Crear Lista
  creaEmpresa(empresa: any, coleccion: string){
    return this.db.collection(coleccion).add(empresa);
  }

}

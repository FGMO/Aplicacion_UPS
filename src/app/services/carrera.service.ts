import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';
import { CarreraInterface } from '../models/carrera.interface';

@Injectable({
  providedIn: 'root'
})
export class CarreraService  {
    private listaCollection: AngularFirestoreCollection<CarreraInterface>;
    private lista: Observable<CarreraInterface[]>;

    constructor(private db: AngularFirestore) {
        this.listaCollection = db.collection<CarreraInterface>('carrera', ref => ref.orderBy('id', 'asc'));
        this.lista = this.listaCollection.snapshotChanges().pipe(map(
            actions => {
                return actions.map(a => {
                    const data = a.payload.doc.data();
                    const id = a.payload.doc.id;
                    return { id, ...data }
                });
            }
        ));
    }

    getLista() {
        return this.lista;
      }
    
      getCarrera(id: string) {
        return this.db.collection<CarreraInterface>('carrera', ref => ref.where('id', '==', id))
          .snapshotChanges().pipe(map(
            actions => {
              return actions.map(a => {
                const data = a.payload.doc.data();
                const id = a.payload.doc.id;
                return {...data}
              });
            }
          ));
      }

}
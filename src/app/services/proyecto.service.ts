import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable, from } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { ProyectoInterface } from '../models/proyecto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
  private listaCollection: AngularFirestoreCollection<ProyectoInterface>;
  private lista: Observable<ProyectoInterface[]>;

  constructor(private db: AngularFirestore) {
  }

  getLista(id: string) {
    return this.db.collection<ProyectoInterface>('proyecto', ref => ref.where('carrera', '==', id))
      .snapshotChanges().pipe(map(
        actions => {
          return actions.map(a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return { id, ...data }
          });
        }
      ));
  }
}
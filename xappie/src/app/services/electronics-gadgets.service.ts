import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ElectronicsGadgetsService {

  constructor(private firestore: AngularFirestore) {}

  getElectronicGadgets(): Observable<any[]> {
    return this.firestore.collection('electronicsGadgets').valueChanges();
  }

  addElectronicGadgets(data: any) {
    return this.firestore.collection('electronicsGadgets').add(data);
  }

}

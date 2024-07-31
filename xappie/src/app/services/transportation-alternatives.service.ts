import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransportationAlternativesService {

  constructor(private firestore: AngularFirestore) {}

  getTransportationAlternatives(): Observable<any[]> {
    return this.firestore.collection('transportationAlternatives').valueChanges();
  }

  addEnergyEfficiency(data: any) {
    return this.firestore.collection('transportationAlternatives').add(data);
  }

}
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FeedItem } from '../models/feed-item.model';

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
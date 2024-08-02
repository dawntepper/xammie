import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FeedItem } from '../models/feed-item.model';

@Injectable({
  providedIn: 'root'
})
export class EnergyEfficiencyService {

  constructor(private firestore: AngularFirestore) {}

  getEnergyEfficiency(): Observable<any[]> {
    return this.firestore.collection('energyEfficiency').valueChanges();
  }

  addEnergyEfficiency(data: any) {
    return this.firestore.collection('energyEfficiency').add(data);
  }

}






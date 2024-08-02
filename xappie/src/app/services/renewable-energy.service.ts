import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FeedItem } from '../models/feed-item.model';

@Injectable({
  providedIn: 'root'
})
export class RenewableEnergyService {

  constructor(private firestore: AngularFirestore) {}

  getRenewableEnergy(): Observable<any[]> {
    return this.firestore.collection('renewableEnergy').valueChanges();
  }

  addRenewableEnergy(data: any) {
    return this.firestore.collection('renewableEnergy').add(data);
  }

}

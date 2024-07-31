import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PurchasingDecisionsService {

  constructor(private firestore: AngularFirestore) {}

  getPurchasingDecisions(): Observable<any[]> {
    return this.firestore.collection('purchasingDecisions').valueChanges();
  }

  addPurchasingDecisions(data: any) {
    return this.firestore.collection('purchasingDecisions').add(data);
  }

}
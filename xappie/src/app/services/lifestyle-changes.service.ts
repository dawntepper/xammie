import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LifestyleChangesService {

  constructor(private firestore: AngularFirestore) {}

  getLifestyleChanges(): Observable<any[]> {
    return this.firestore.collection('lifestyleChanges').valueChanges();
  }

  addLifestyleChanges(data: any) {
    return this.firestore.collection('lifestyleChanges').add(data);
  }

}
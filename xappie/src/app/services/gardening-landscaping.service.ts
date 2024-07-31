import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GardeningLandscapingService {

  constructor(private firestore: AngularFirestore) {}

  getGardeningLandscaping(): Observable<any[]> {
    return this.firestore.collection('gardeningLandscaping').valueChanges();
  }

  addGardeningLandscaping(data: any) {
    return this.firestore.collection('gardeningLandscaping').add(data);
  }

}

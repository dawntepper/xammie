import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FeedItem } from '../models/feed-item.model';

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

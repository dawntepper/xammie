import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FeedItem } from '../models/feed-item.model';

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
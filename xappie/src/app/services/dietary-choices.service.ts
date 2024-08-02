import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FeedItem } from '../models/feed-item.model';

@Injectable({
  providedIn: 'root'
})
export class DietaryChoicesService {
  constructor(private firestore: AngularFirestore) {}

  getDietaryChoices(): Observable<any[]> {
    return this.firestore.collection('dietaryChoices').valueChanges();
  }

  addDietaryChoices(data: any) {
    return this.firestore.collection('dietaryChoices').add(data);
  }
}

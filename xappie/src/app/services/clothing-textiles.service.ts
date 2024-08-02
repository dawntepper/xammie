import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FeedItem } from '../models/feed-item.model';

@Injectable({
  providedIn: 'root'
})
export class ClothingTextilesService {

  constructor(private firestore: AngularFirestore) {}

  getClothingTextiles(): Observable<any[]> {
    return this.firestore.collection('clothingTextiles').valueChanges();
  }

  addClothingTextiles(data: any) {
    return this.firestore.collection('clothingTextiles').add(data);
  }

}
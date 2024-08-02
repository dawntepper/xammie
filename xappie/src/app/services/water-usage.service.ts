import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FeedItem } from '../models/feed-item.model';

@Injectable({
  providedIn: 'root'
})
export class WaterUsageService {

  constructor(private firestore: AngularFirestore) {}

  getWaterUsage(): Observable<any[]> {
    return this.firestore.collection('waterUsage').valueChanges();
  }

  addWaterUsage(data: any) {
    return this.firestore.collection('waterUsage').add(data);
  }

}
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private firestore: AngularFirestore) { }

  addPost(post: any): Promise<void> {
    const id = this.firestore.createId();
    return this.firestore.doc(`posts/${id}`).set(post);
  }

  getPosts(): Observable<any[]> {
    return this.firestore.collection('posts').valueChanges();
  }
}

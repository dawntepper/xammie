import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../services/firestore.service';
import { addIcons } from 'ionicons';
import { logoIonic } from 'ionicons/icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  posts: any[] = []; // Define and initialize the posts property

  constructor(private firestoreService: FirestoreService) {}

  ngOnInit() {
    this.firestoreService.getPosts().subscribe(posts => {
      this.posts = posts;
    });
  }
}

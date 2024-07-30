import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'https://api.example.com';

  constructor(private http: HttpClient) {}

  getTimelinePosts(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/posts`);
  }

  addPost(post: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/posts`, post);
  }

  followUser(userId: string, followId: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/follow`, { userId, followId });
  }

  // More methods for messaging, profiles, etc.
}


import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { API_KEY, API_URL } from 'src/Constant';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  constructor(private http: Http) { }
  getDefaultSong(){
    return this.http.get(
      `${API_URL}?q=tibetan song&key=${API_KEY}&maxResults=29&part=snippet&type=video`
    )
  }
}

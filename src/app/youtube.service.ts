import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { API_KEY, API_URL } from 'src/Constant';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  constructor(private http: Http) { }
  getDefaultSong(keyword){
    return this.http.get(
      `${API_URL}?q="${keyword}"&key=${API_KEY}&maxResults=29&part=snippet&type=video`
    ).pipe(
      map(res => res.json().items)

    );
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Http } from '@angular/http';
import { distinctUntilChanged ,debounceTime,switchMap,map} from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { PlayVideoComponent } from '../play-video/play-video.component';
import { API_URL, API_KEY } from 'src/Constant';
import { YoutubeService } from '../youtube.service';

@Component({
  selector: 'app-drama',
  templateUrl: './drama.component.html',
  styleUrls: ['./drama.component.scss']
})
export class DramaComponent implements OnInit {

  searchForm: FormGroup;
  results: Observable<{}>;
  searchTerm: string;

  constructor(private formBuilder: FormBuilder, private http: Http, public dialog: MatDialog,private youtubeService:YoutubeService) {
    this.searchForm = this.formBuilder.group({
      search: ['', Validators.required],
    });

    this.results = this.searchForm.controls.search.valueChanges.pipe(
      debounceTime(300), 
      distinctUntilChanged(),
      switchMap(searchTerm =>
        this.http.get(
          `${API_URL}?q=${searchTerm}+%22tibetan+drama%22&key=${API_KEY}&maxResults=29&part=snippet&type=video`
        )
      ),
      map(res => res.json().items)
    );
  }
  ngOnInit(): void {
    this.results = this.youtubeService.getDefaultSong("tibetan drama");

  }
  searchVideo() {
    this.results = this.youtubeService.getDefaultSong(this.searchTerm + " tibetan drama");
  }
  onClick(header:string, key:string): void {
    const dialogRef = this.dialog.open(PlayVideoComponent, {
      width: '700px',
      height: '600px',
      data: {name: header, animal: "https://www.youtube.com/embed/" + key}
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}

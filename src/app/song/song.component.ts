import { Component, OnInit } from '@angular/core';
import { PlayVideoComponent } from '../play-video/play-video.component';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Http } from '@angular/http';
import { distinctUntilChanged ,debounceTime,switchMap,map} from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { API_URL, API_KEY } from 'src/Constant';
@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.scss']
})
export class SongComponent implements OnInit {

  searchForm: FormGroup;
  results: Observable<{}>;

  constructor(private formBuilder: FormBuilder, private http: Http, public dialog: MatDialog) {
    this.searchForm = this.formBuilder.group({
      search: ['', Validators.required],
    });

    this.results = this.searchForm.controls.search.valueChanges.pipe(
      debounceTime(300), 
      distinctUntilChanged(),
      switchMap(searchTerm =>
        this.http.get(
          `${API_URL}?q=${searchTerm} tibetan song&key=${API_KEY}&maxResults=29&part=snippet&type=video`
        )
      ),
      map(res => res.json().items)
    );
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
  ngOnInit(): void {
  }

}

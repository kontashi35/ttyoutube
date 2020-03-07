import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { distinctUntilChanged ,debounceTime,switchMap,map} from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { PlayVideoComponent } from '../play-video/play-video.component';

const API_URL = 'https://www.googleapis.com/youtube/v3/search';
const API_KEY = 'AIzaSyCSVSuprlmGkoO5swweCErlHTXIV2z4eng';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  searchForm: FormGroup;
  results: Observable<{}>;
  test = "thid fjdsiojfdsfjdsafauf asdiufsdnafusdaf fndsafunsdaufd sdfmsdaiofumdsf"

  constructor(private formBuilder: FormBuilder, private http: Http, public dialog: MatDialog) {
    this.searchForm = this.formBuilder.group({
      search: ['Search', Validators.required],
    });

    this.results = this.searchForm.controls.search.valueChanges.pipe(
      debounceTime(300), 
      distinctUntilChanged(),
      switchMap(searchTerm =>
        this.http.get(
          `${API_URL}?q=${searchTerm} tibetan song&key=${API_KEY}&maxResults=20&part=snippet&type=video`
        )
      ),
      map(res => res.json().items)
    );
  }

 

  ngOnInit(): void {
  }

}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {MatTabsModule} from '@angular/material/tabs';
import { ContentComponent } from './content/content.component';
import { HttpModule } from '@angular/http';
import { HttpClient} from '@angular/common/http';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatGridListModule} from '@angular/material/grid-list';
import {TruncatePipePipe} from './truncate-pipe.pipe';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import { PlayVideoComponent } from './play-video/play-video.component';
import { SafePipe } from './safe.pipe';
import { SongComponent } from './song/song.component';
import { DramaComponent } from './drama/drama.component';
import { SpeechComponent } from './speech/speech.component';











@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    TruncatePipePipe,
    PlayVideoComponent,
    SafePipe,
    SongComponent,
    DramaComponent,
    SpeechComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatGridListModule,
    MatDialogModule
    
  ],
  entryComponents: [PlayVideoComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

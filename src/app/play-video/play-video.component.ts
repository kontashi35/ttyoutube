import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
export interface DialogData {
  animal: string;
  name: string;
}
@Component({
  selector: 'app-play-video',
  templateUrl: './play-video.component.html',
  styleUrls: ['./play-video.component.scss']
})
export class PlayVideoComponent implements OnInit,OnDestroy {
  ngOnDestroy(): void {
   console.trace("closed")
  }
  animal: string;
  name: string;


  constructor(
    public dialogRef: MatDialogRef<PlayVideoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  onResize(event) {
    var iFrame = document.getElementById( 'iFrame1' );
      this.resizeIFrameToFitContent( iFrame );
      

  }
  


  ngOnInit(): void {

  }
   resizeIFrameToFitContent( iFrame ) {
     console.log("resizing");
     

    iFrame.width  = iFrame.contentWindow.document.body.scrollWidth;
    iFrame.height = iFrame.contentWindow.document.body.scrollHeight;
}
  

}

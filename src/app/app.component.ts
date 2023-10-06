import { Component, HostListener, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'simple-crm';
  small!:boolean;

  innerWidth!: number;


  constructor() {}

  ngOnInit() {
    this.innerWidth = window.innerWidth;
    if (this.innerWidth > 567) {
      this.small = true;
    } else{
      this.small = false;
    }

  }

@HostListener('window:resize', ['$event'])
onResize(event:any) {
  this.innerWidth = window.innerWidth;
  if (this.innerWidth > 567) {
    this.small = true;
  } else{
    this.small = false;
  }
}

}
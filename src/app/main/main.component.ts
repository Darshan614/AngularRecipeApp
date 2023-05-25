import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  tech: string = 'React';
  techarr: string[] = ['React','Angular', 'NodeJS', 'MongoDB', 'Express', 'AWS'];
  id: any;
  cindex: number = 0;
  constructor() {}

  ngOnInit() {
    this.id = setInterval(() => {
      console.log('hi');
      this.tech = this.techarr[this.cindex];
      if (this.cindex >= 5) {
        this.cindex = 0;
      } else {
        this.cindex++;
      }
    }, 2000);
  }
  ngOnDestroy() {
    clearInterval(this.id);
  }
}

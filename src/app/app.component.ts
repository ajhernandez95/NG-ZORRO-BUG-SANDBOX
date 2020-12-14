import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  timeOne: any;
  timeTwo: any = new Date(1607960844 * 1000);

  ngOnInit() {
    console.log(this.timeOne, this.timeTwo)
  }

  timeChangedOne() {
    console.log(this.timeOne);
  }

  timeChangedTwo() {
    console.log(this.timeTwo)
  }
}

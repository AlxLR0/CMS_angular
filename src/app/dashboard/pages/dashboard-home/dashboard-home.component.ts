import { Component,OnInit  } from '@angular/core';

@Component({
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.css']
})
export class DashboardHomeComponent {

  currentTime: Date = new Date();

  constructor() { }

  ngOnInit(): void {
    this.updateTime();
  }

  private updateTime(): void {
    setInterval(() => {
      this.currentTime = new Date();
    }, 1000);
  }

}

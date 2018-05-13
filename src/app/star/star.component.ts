import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit {
  isAcive: boolean;

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    console.log(`this has been clicked`);
  }
}

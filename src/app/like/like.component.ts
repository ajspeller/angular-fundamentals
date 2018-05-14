import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {
  @Input() likesCount: number;
  @Input() isActive: boolean;

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.isActive = !this.isActive;
    this.isActive ? this.likesCount++ : this.likesCount--;
    console.log(this.isActive);
  }

}

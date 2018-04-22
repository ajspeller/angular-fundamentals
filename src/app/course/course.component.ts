import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  title = 'List of courses';
  imageUrl = 'http://lorempixel.com/400/200';
  colspan = 2;
  isActive = true;

  constructor() { }

  ngOnInit() {
  }

  onSave(evt) {
    console.log(`button was clicked`);
    console.log(evt);
    evt.stopPropagation();
  }

  onDivClicked() {
    console.log(`div was clicked`);
  }

  onKeyUp(email: string) {
    console.log(email);
    // if (evt.keyCode === 13) {
      // console.log(`enter was presses`);
    //  }
  }
}

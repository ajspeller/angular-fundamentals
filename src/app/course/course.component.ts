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
  email = 'ajspeller@gmail.com';
  course = {
    title: 'Learning Angular',
    rating: 4.9768,
    students: 8888,
    price: 199.95,
    releaseDate: new Date(2016, 3, 1)
  };

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

  onKeyUp() {
    console.log(this.email);
  }
}

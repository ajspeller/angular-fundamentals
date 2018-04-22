import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
  selector: 'courses',
  template: `
  <h2>{{ getTitle() }}</h2>
  <ul>
    <li *ngFor='let course of courses'>{{ course }}</li>
  </ul>
  `
})
export class CoursesComponent {
  title = 'List of courses';
  courses: string[];

  constructor(private courseService: CoursesService) {
    this.courses = this.courseService.getCourses();
  }

  getTitle(): string {
    return this.title;
  }

  // Logic for calling http endpoint
}

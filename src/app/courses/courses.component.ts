import { CoursesService } from '../common/services/courses.service';
import { Course } from '../common/models/course';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

const emptyCourse: Course = {
  id: null,
  title: '',
  description: '',
  percentComplete: 0,
  favorite: false,
};

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  courses = [];
  courses$: Observable<Course[]>;
  selectedCourse = emptyCourse;
  originalTitle = '';

  constructor(private coursesService: CoursesService) {}

  ngOnInit(): void {
    this.fetchCourse();
  }

  fetchCourse() {
    this.courses$ = this.coursesService.all();
    // this.coursesService
    //   .all()
    //   .subscribe((result: Course[]) => (this.courses = result));
  }

  selectCourse(course) {
    this.selectedCourse = course;
    this.originalTitle = course.title;
  }
  saveCourse(course) {
    if (course.id) {
      this.updateCourse(course);
    } else {
      this.createCourse(course);
    }
    console.log(course);
  }

  createCourse(course) {
    this.coursesService
      .create(course)
      .subscribe((results) => this.fetchCourse());
  }

  updateCourse(course) {
    this.coursesService
      .update(course)
      .subscribe((results) => this.fetchCourse());
  }
  deleteCourse(courseId) {
    this.coursesService
      .delete(courseId)
      .subscribe((result) => this.fetchCourse());
  }

  reset() {
    this.selectCourse({ ...emptyCourse });
  }
}

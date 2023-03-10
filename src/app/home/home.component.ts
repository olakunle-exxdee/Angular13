import { LessonsService } from './../common/services/lessons.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  lessons = [];
  selectedLesson = null;
  constructor(private lessonsService: LessonsService) {}

  ngOnInit() {
    this.lessons = this.lessonsService.lessons;
  }
  selectLesson(lesson) {
    this.selectedLesson = lesson;
  }
}

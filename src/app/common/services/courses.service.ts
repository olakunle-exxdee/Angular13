import { HttpClient } from '@angular/common/http';
import { Course } from '../models/course';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const BASE_URL = 'http://localhost:3000';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  model = 'courses';

  constructor(private http: HttpClient) {}

  all(): Observable<Course[]> {
    return this.http.get<Course[]>(this.getUrl());
  }

  find(id: string) {
    return this.http.get(this.getUrlID(id));
  }

  create(course: Course) {
    return this.http.post(this.getUrl(), course);
  }

  update(course: Course) {
    return this.http.put(this.getUrlID(course.id), course);
  }

  delete(id: string) {
    return this.http.delete(this.getUrlID(id));
  }
  private getUrl() {
    return `${BASE_URL}/${this.model}`;
  }

  private getUrlID(id: string) {
    return `${this.getUrl()}/${id}`;
  }
}

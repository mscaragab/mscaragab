import { Injectable } from '@angular/core'
import { Course } from './course.model'
import { coursesData } from './courses.data'

@Injectable({ providedIn: 'root' })
export class CoursesService {
	private courses: Course[] = coursesData.slice()

	getCourses(): Course[] {
		return this.courses.slice()
	}
}

import { Component, OnInit } from '@angular/core'
import { Course } from '../service/course.model'
import { CoursesService } from '../service/courses.service'

@Component({
	selector: 'app-courses',
	templateUrl: './courses.component.html',
	styleUrls: ['./courses.component.css'],
})
export class CoursesComponent implements OnInit {
	courses: Course[]

	constructor(private coursesService: CoursesService) {}

	ngOnInit(): void {
    console.log(this.courses);
		this.courses = this.coursesService.getCourses()
	}
}

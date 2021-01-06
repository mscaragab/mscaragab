import { Injectable } from '@angular/core'
import { Project } from './project.model'

@Injectable({ providedIn: 'root' })
export class ProjectsService {
	private projects = [
		new Project(
			'Recipe Book',
			'Angular Complete Guide Course Project.',
			'Angular Material, NgRx and Realtime database',
			'Too much code was written for Ngrx with actions, reducers and effects. In real life we should use Ngrx Data.',
			'assets/img/recipe-book.png',
			'https://github.com/mscaragab/recipe-book',
			'https://ng-recipe-book.netlify.app/'
		),
		new Project(
			'PWAGram',
			'PWA Course Project.',
			'PWA, Offline, Background Sync, Push Notifications, Native Features (Camera, GeoLocation...)',
			'This is a Progressive Web Application that you can install on your machine. It works offline.',
			'assets/img/pwagram.png',
			'https://github.com/mscaragab/pwagram',
			'https://ng-pwagram.netlify.app/'
		),
		new Project(
			'Fitness Tracker',
			'Angular Full App Course Project.',
			'Angular Materila, Angularfire, NgRx and Firestore',
			'This is a good example of Angular Material Table with filtering, sorting, and pagination.',
			'assets/img/fitness-tracker.png',
			'https://github.com/mscaragab/fitness-tracker',
			'https://ng-fitness-tracker.netlify.app/'
		),
	]

	getProjects() {
		return this.projects
	}

	getProject(id: number) {
		return this.projects[id]
	}
}

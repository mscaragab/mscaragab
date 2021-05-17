import { Injectable } from '@angular/core'
import { Project } from './project.model'

@Injectable({ providedIn: 'root' })
export class ProjectsService {
	private projects = [
		new Project(
			'Recipe Book',
			'Angular Complete Guide Course Project.',
			'Angular Material, NgRx and Realtime database',
			'This is a PWA. You can install it and use it offline. Too much code was written for Ngrx with actions, reducers and effects. In real life, I use Ngrx Data.',
			'assets/images/projects/recipe-book.png',
			'https://github.com/mscaragab/recipe-book',
			'https://ng-recipe-book.netlify.app/'
		),
		new Project(
			'PWAGram',
			'PWA Course Project.',
			'PWA, Offline, Background Sync, Push Notifications, Native Features (Camera, GeoLocation...).',
			'This is a PWA. You can install it and use it offline. You can see native features in action like camera and geolocation. It also notifies you of any new posts published.',
			'assets/images/projects/pwagram.png',
			'https://github.com/mscaragab/pwagram',
			'https://ng-pwagram.netlify.app/'
		),
		new Project(
			'Shopping Store',
			'Build Angular Shopping Store Course Project.',
			'Angular, Angular Materila, and RxJS',
			'This is the project of my course Build Angular Shopping Store. (available at Udemy among other courses)',
			'assets/images/projects/shopping-store.png',
			'',
			'https://demo289.netlify.app/'
		),
		new Project(
			'Fitness Tracker',
			'Angular Full App Course Project.',
			'Angular Materila, Angularfire, NgRx and Firestore',
			'This is a PWA. You can install it and use it offline. This is a good example of using Angular Material Table with filtering, sorting, and pagination.',
			'assets/images/projects/fitness-tracker.png',
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

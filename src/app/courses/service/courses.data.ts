import { Course } from './course.model'

export const coursesData: Course[] = [
	{
		id: '1',
		name: 'Angular Material Basic Setup (2021 Edition)',
		description: `
    Welcome to the Angular Material Basic Setup Course.
    In this course, you will learn how to add the Angular Material to your project.
    You will do the basic setup of adding a toolbar, a search box and a sidenav.
    Through the course, you will learn the CSS Flexbox, the CSS Media Query, and the CDK Layout BreakpointObserver.
    `,
		imageUrl: 'assets/images/courses/basic-setup.jpg',
		courseUrl: '/courses/basic-setup',
	},
	{
		id: '2',
		name: 'Build Online E-Commerce Shopping Store Using Angular & RxJS (2021 Edition)',
		description: `
    Welcome to the Shopping Store course.
    In this course, you will learn how to build a shopping store using the latest Angular technology.
    You will use Angular, Angular Material, and RxJS.
    This course will continually get more sections added as we go.
    We will add sections for Authenication, Backend, Payments, and so on.
    `,
		imageUrl: 'assets/images/courses/shopping-store.jpg',
		courseUrl: '/courses/shopping-store',
	},
]

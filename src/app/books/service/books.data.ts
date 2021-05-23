import { Book } from './book.model'

export const booksData: Book[] = [
	{
		id: '1',
		name: 'Angular Material Basic Setup',
		description: `
    Learn how to add the Angular Material to your project.
    You will do a basic setup of your application, adding a toolbar, a search box and a Sidenav.
    You will learn the CSS Flexbox, the CSS Media Query, and the CDK Layout BreakpointObserve.
    `,
		imageUrl: 'assets/images/books/basic-setup.jpg',
		bookUrl: '/books/basic-setup',
	},
	{
		id: '2',
		name: 'Build Online E-Commerce Shopping Store Using Angular & RxJS',
		description: `
    Learn how to build a shopping store using the Angular technology.
    You will create the home page, the product page, the search page, and the shopping cart page.
    You will learn how to build all the components using the Angular and the Angular Material.
    You will learn how to manipulate the data using the RxJS.
    `,
		imageUrl: 'assets/images/books/shopping-store.jpg',
		bookUrl: '/books/shopping-store',
	},
	{
		id: '3',
		name: 'Modern CSS Layouts In 5 Minutes',
		description: `
    Modern CSS Layouts In 5 Minutes: Learn CSS Flexbox, CSS Grid, and CSS Media Query
    `,
		imageUrl: 'assets/images/books/modern-css.jpg',
		bookUrl: '/books/modern-css',
	},
]

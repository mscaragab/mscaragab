import { Injectable } from '@angular/core'
import { Book } from './book.model'
import { booksData } from './books.data'

@Injectable({ providedIn: 'root' })
export class BooksService {
	private books: Book[] = booksData.slice()

	getBooks(): Book[] {
		return this.books.slice()
	}
}

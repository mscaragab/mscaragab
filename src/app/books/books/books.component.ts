import { Component, OnInit } from '@angular/core'
import { Book } from '../service/book.model'
import { BooksService } from '../service/books.service'

@Component({
	selector: 'app-books',
	templateUrl: './books.component.html',
	styleUrls: ['./books.component.css'],
})
export class BooksComponent implements OnInit {
	books: Book[]

	constructor(private booksService: BooksService) {}

	ngOnInit(): void {
		console.log(this.books)
		this.books = this.booksService.getBooks()
	}
}

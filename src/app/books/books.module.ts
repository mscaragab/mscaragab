import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { BooksComponent } from './books/books.component'
import { BasicSetupComponent } from './basic-setup/basic-setup.component'
import { MaterialModule } from '../material.module'
import { RouterModule } from '@angular/router'

@NgModule({
	declarations: [BooksComponent, BasicSetupComponent],
	imports: [
		CommonModule,
		MaterialModule,
		RouterModule.forChild([
			{ path: '', component: BooksComponent },
			{ path: 'basic-setup', component: BasicSetupComponent },
		]),
	],
})
export class BooksModule {}

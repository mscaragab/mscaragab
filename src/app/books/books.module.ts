import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { BooksComponent } from './books/books.component'
import { BasicSetupComponent } from './basic-setup/basic-setup.component'
import { MaterialModule } from '../material.module'
import { RouterModule } from '@angular/router'
import { ShoppingStoreComponent } from './shopping-store/shopping-store.component'
import { ModernCssComponent } from './modern-css/modern-css.component'

@NgModule({
	declarations: [
		BooksComponent,
		BasicSetupComponent,
		ShoppingStoreComponent,
		ModernCssComponent,
	],
	imports: [
		CommonModule,
		MaterialModule,
		RouterModule.forChild([
			{ path: '', component: BooksComponent },
			{ path: 'basic-setup', component: BasicSetupComponent },
			{ path: 'shopping-store', component: ShoppingStoreComponent },
			{ path: 'modern-css', component: ModernCssComponent },
		]),
	],
})
export class BooksModule {}

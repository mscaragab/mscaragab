import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CoursesComponent } from './courses/courses.component'
import { PurchaseConfirmationComponent } from './shopping-store/purchase-confirmation/purchase-confirmation.component'
import { MaterialModule } from '../material.module'
import { RouterModule } from '@angular/router'
import { ShoppingStoreComponent } from './shopping-store/shopping-store.component'

@NgModule({
	declarations: [
		CoursesComponent,
		PurchaseConfirmationComponent,
		ShoppingStoreComponent,
	],
	imports: [
		CommonModule,
		MaterialModule,
		RouterModule.forChild([
			{ path: '', component: CoursesComponent },
			{ path: 'shopping-store', component: ShoppingStoreComponent },
			{
				path: 'shopping-store/purchase-confirmation',
				component: PurchaseConfirmationComponent,
			},
		]),
	],
})
export class CoursesModule {}

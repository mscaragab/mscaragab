import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CoursesComponent } from './courses/courses.component'
import { PurchaseConfirmationComponent as ShoppingStoreConfirmation } from './shopping-store/purchase-confirmation/purchase-confirmation.component'
import { MaterialModule } from '../material.module'
import { RouterModule } from '@angular/router'
import { ShoppingStoreComponent } from './shopping-store/shopping-store.component'
import { BasicSetupComponent } from './basic-setup/basic-setup.component'
import { PurchaseConfirmationComponent as BasicSetupConfirmation } from './basic-setup/purchase-confirmation/purchase-confirmation.component'

@NgModule({
	declarations: [
		CoursesComponent,
		ShoppingStoreConfirmation,
		ShoppingStoreComponent,
		BasicSetupComponent,
		BasicSetupConfirmation,
	],
	imports: [
		CommonModule,
		MaterialModule,
		RouterModule.forChild([
			{ path: '', component: CoursesComponent },
			{ path: 'basic-setup', component: BasicSetupComponent },
			{
				path: 'basic-setup/purchase-confirmation',
				component: BasicSetupConfirmation,
			},
			{ path: 'shopping-store', component: ShoppingStoreComponent },
			{
				path: 'shopping-store/purchase-confirmation',
				component: ShoppingStoreConfirmation,
			},
		]),
	],
})
export class CoursesModule {}

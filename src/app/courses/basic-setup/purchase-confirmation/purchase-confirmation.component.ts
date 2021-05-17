import { Component, OnInit } from '@angular/core'

@Component({
	selector: 'app-purchase-confirmation',
	templateUrl: './purchase-confirmation.component.html',
	styleUrls: ['./purchase-confirmation.component.css'],
})
export class PurchaseConfirmationComponent implements OnInit {
	constructor() {}

	ngOnInit(): void {}

	onClick() {
		window.location.href =
			'https://drive.google.com/drive/folders/1_kzvCvaIYnaFxApmQkO48VuCP--nBELm?usp=sharing'
	}
}

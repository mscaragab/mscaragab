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
		window.location.href = 'https://drive.google.com/drive/folders/1iw1-1P4DvdrvNi4co6b4Lw8lFRWziH33?usp=sharing'
	}
}

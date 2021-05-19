import {
	Component,
	EventEmitter,
	OnDestroy,
	OnInit,
	Output,
} from '@angular/core'
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout'
import { Subscription } from 'rxjs'
import { tap } from 'rxjs/operators'

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy {
	@Output() sidenavToggle = new EventEmitter<void>()
	mobile: boolean = false
	susbscriptions: Subscription[] = []

	constructor(private breakpointObserver: BreakpointObserver) {}

	ngOnInit(): void {
		this.susbscriptions.push(
			this.breakpointObserver
				.observe([Breakpoints.XSmall, Breakpoints.Small])
				.pipe(
					tap(breakpoint => {
						this.mobile =
							breakpoint.breakpoints[Breakpoints.XSmall] ||
							breakpoint.breakpoints[Breakpoints.Small]
					})
				)
				.subscribe()
		)
	}

  onClick() {
    
  }

	onToggle() {
		this.sidenavToggle.emit()
	}

	ngOnDestroy() {
		for (let subscription of this.susbscriptions) subscription.unsubscribe()
	}
}

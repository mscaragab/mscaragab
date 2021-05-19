import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MaterialModule } from './material.module'
import { HeaderComponent } from './header/header.component'
import { SidenavComponent } from './sidenav/sidenav.component'
import { NotFoundComponent } from './not-found/not-found.component'
import { ProjectsComponent } from './projects/projects.component'
import { ProjectComponent } from './projects/project/project.component'
import { ResumeComponent } from './resume/resume.component'
import { FirstFooterComponent } from './first-footer/first-footer.component'
import { SecondFooterComponent } from './second-footer/second-footer.component'

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		SidenavComponent,
		NotFoundComponent,
		ProjectsComponent,
		ProjectComponent,
		ResumeComponent,
		FirstFooterComponent,
		SecondFooterComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		MaterialModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}

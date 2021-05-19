import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { NotFoundComponent } from './not-found/not-found.component'
import { ProjectComponent } from './projects/project/project.component'
import { ProjectsComponent } from './projects/projects.component'
import { ResumeComponent } from './resume/resume.component'

const routes: Routes = [
	{ path: '', redirectTo: '/projects', pathMatch: 'full' },
	{
		path: 'books',
		loadChildren: () => import('./books/books.module').then(m => m.BooksModule),
	},
	{
		path: 'courses',
		loadChildren: () =>
			import('./courses/courses.module').then(m => m.CoursesModule),
	},
	{ path: 'projects', component: ProjectsComponent },
	{ path: 'projects/:id', component: ProjectComponent },
	{ path: 'resume', component: ResumeComponent },
	{ path: '**', component: NotFoundComponent },
]

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}

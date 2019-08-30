import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServicesComponent } from './services.component';


const routes: Routes = [
	{
		path: 'services',
		component: ServicesComponent,
		data: {
			breadcrumb: 'Services',
			icon: 'icofont icofont-file-document bg-c-pink',
			breadcrumb_caption: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit - Sample Page',
			status: true
		}
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class ServicesRoutingModule { }

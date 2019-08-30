import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact.component';


const routes: Routes = [
	{
		path: 'contact',
		component: ContactComponent,
		data: {
			breadcrumb: 'Contact',
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
export class ContactRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageHeaderRoutingModule } from './pageHeader-routing.module';
import { PageHeaderComponent } from './pageHeader.component';


@NgModule({
	imports: [
		CommonModule,
		PageHeaderRoutingModule
	],
	exports: [
		PageHeaderComponent,
	],
	declarations: [
		PageHeaderComponent,
	],
	providers: [
	]
})
export class PageHeaderModule { }

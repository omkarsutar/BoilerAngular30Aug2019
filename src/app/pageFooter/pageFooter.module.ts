import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageFooterRoutingModule } from './pageFooter-routing.module';
import { PageFooterComponent } from './pageFooter.component';


@NgModule({
	imports: [
		CommonModule,
		PageFooterRoutingModule
	],
	exports: [
		PageFooterComponent,
	],
	declarations: [
		PageFooterComponent,
	],
	providers: [
	]
})
export class PageFooterModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { PageHeaderModule } from './pageHeader/pageHeader.module';
import { PageFooterModule } from './pageFooter/pageFooter.module';
import { ContactModule } from './contact/contact.module';
import { AboutModule } from './about/about.module';
import { ServicesModule } from './services/services.module';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,

		HomeModule,
		ContactModule,
		AboutModule,
		ServicesModule,
		PageHeaderModule,
		PageFooterModule,

		AngularFontAwesomeModule,
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }

import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
	arr1: string[];
	flagShowPara: boolean;

	constructor(
	) {
	}

	ngOnInit() {
		this.arr1 = [
			'Number is 1',
			'Number is 2',
		];

		this.flagShowPara = true;
	}

	insertElement() {
		this.arr1.push('Number is ' + (this.arr1.length + 1));
	}

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserModel } from '../Model/user.model';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class ChartService {
	// URL to connect to the (node) server.
	uri: string = 'http://localhost:3000';

	// User Model Interface
	newUser: UserModel[];

	record = [
		{name: "Jackson", course: "MCA", department: "Computer Science"},
		
		{name: "Smith", course: "BCA", department: "Computer Science"},
		{name: "Hennah", course: "B.Tech", department: "Engineer"},
		{name: "Sikha", course: "Physics", department: "B.Sc"},
	
	]

	link = "../../assets/data.json"
	

	constructor(private _http: HttpClient) {}

	//Form Data

	form: FormGroup = new FormGroup({
		$key: new FormControl(null),
		name: new FormControl('', Validators.required),
		email: new FormControl('', Validators.required),
		dob: new FormControl('', Validators.required),
		gender: new FormControl ('', Validators.required),
		contact: new FormControl('', Validators.required),
		country: new FormControl('', Validators.required)
	});

	initializeFormGroup() {
		this.form.setValue({
			$key: null,
			name: '',
			email: '',
			dob: '',
			gender: '',
			contact: '',
			country: ''
		});
	}

	// GET request api(User): Reference, from node server
	getUser() {
		return this._http.get(`${this.uri}/user`);
	}

	// GET request api(Chart): Reference, from node server
	getChart() {
		return this._http.get(`${this.uri}/chart`);
	}

	// POST request api(user): Reference, from node server
	addUser(newUser: UserModel) {
		return this._http.post(`${this.uri}/user`, newUser);
	}

	// Static Data
	getData(){
		return this._http.get(this.link)
	}
}

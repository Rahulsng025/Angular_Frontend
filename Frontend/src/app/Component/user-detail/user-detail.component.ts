import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/Model/user.model';
import { ChartService } from '../../Service/chart.service';
import { MatDialogConfig, MatDialogRef, MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ChartLayoutComponent } from './chart-layout/chart-layout.component';

@Component({
	selector: 'app-user-detail',
	templateUrl: './user-detail.component.html',
	styleUrls: [ './user-detail.component.scss' ]
})
export class UserDetailComponent implements OnInit {
	//Reference to User Model Interface
	newUser: UserModel[];
	//Property To display Columns of a table
	displayedColumns = [ 'name', 'email', 'gender', 'contact', 'dob', 'country' ];

	constructor(public _chartService: ChartService, public router: Router, public dialog: MatDialog) {}

	ngOnInit(): void {
		setTimeout(() => {
			this.fetchUserData();
		}, 3000);
	}
	// Fetch method is use to get values from service to user component
	fetchUserData() {
		this._chartService.getUser().subscribe((data: UserModel[]) => {
			this.newUser = data;
			console.log(data);
		});
	}

	onCreate() {
		this._chartService.initializeFormGroup();
		const dialogConfig = new MatDialogConfig();
		dialogConfig.disableClose = true;
		dialogConfig.autoFocus = true;
		dialogConfig.width = '60%';
		this.dialog.open(ChartLayoutComponent, dialogConfig);
	}
}

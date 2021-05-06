import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ChartService } from "../../../Service/chart.service";
import { UserModel } from '../../../Model/user.model'
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-chart-layout',
  templateUrl: './chart-layout.component.html',
  styleUrls: ['./chart-layout.component.scss']
})
export class ChartLayoutComponent implements OnInit {

  //Reference to User Model Interface
  newUser: UserModel[];

  constructor(public _chartService: ChartService,
    public router: Router,
    public dialogRef: MatDialogRef<ChartLayoutComponent>) { }

  ngOnInit(): void {
    this._chartService.getUser();
  }

  onSubmit() {
    if(this._chartService.form.valid) {
      this._chartService.addUser(this._chartService.form.value).subscribe((_data: UserModel[]) => {
        this.router.navigate(['/user-detail']);
        this._chartService.form.reset();
        this._chartService.initializeFormGroup();
        this.onClose();
        
      })
    }
  }

  onClose() {
    this._chartService.form.reset();
    this._chartService.initializeFormGroup();
    this.dialogRef.close();
  }

  onClear() {
    this._chartService.form.reset();
    this._chartService.initializeFormGroup();
  }


}

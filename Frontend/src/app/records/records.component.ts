import { Component, OnInit } from '@angular/core';
import { ChartService } from '../Service/chart.service';
import { DataModel } from '../Model/data.model';

@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.scss']
})
export class RecordsComponent implements OnInit {
  
  public user_data = [];
  newModel: DataModel[];

  constructor(private chatService: ChartService
    ) { }

  ngOnInit(): void {
    this.getDataFromService();
  }

  getDataFromService(){
    this.chatService.getData().subscribe((data: DataModel[]) =>{
      this.newModel = data
      console.log(data);
    })
  }

}

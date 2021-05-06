import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { ChartModel } from '../../Model/chart.model';
import { ChartService } from '../../Service/chart.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-pie-chart',
	templateUrl: './pie-chart.component.html',
	styleUrls: [ './pie-chart.component.scss' ]
})
export class PieChartComponent implements OnInit {
	newChart: ChartModel[];
	messageSuccess: boolean;
	PieChart: any = [];
	datasets: any[];
	Expenses = [];
	Amount = [];

	constructor(public _chartService: ChartService, public router: Router) {}

	ngOnInit() {
		this.messageSuccess = true;
		setTimeout(() => {
			this._chartService.getChart().subscribe((res: ChartModel[]) => {
				res.forEach((x) => {
					this.Expenses.push(x.expenses);
					this.Amount.push(x.amount);

					console.log(res);
				});

				this.PieChart = new Chart('pieChart', {
					type: 'pie',

					data: {
						labels: this.Expenses,
						datasets: [
							{
								data: this.Amount,

								backgroundColor: [
									'rgba(40,23,244,0.9)',
									'#2b5797',
									'#1e7145',
									'#e8c3b9',
									'#f990a7',
									'#aad2ed'
								],
								fill: true
							}
						]
					},

					options: {
						legend: {
							display: true
						},
						title: {
							text: 'Pie Chart',
							display: true
						},
						scales: {
							xAxes: [
								{
									ticks: { fontColor: 'white' }
								},

								{
									display: true
								}
							],
							yAxes: [
								{
									ticks: { fontColor: 'white' }
								},

								{
									display: true
								}
							]
						}
					}
				});
			});
			this.messageSuccess = false;
		}, 3000);
	}

	//Navigate to home page
	onClick() {
		this.router.navigate([ '/user-detail' ]);
	}
}

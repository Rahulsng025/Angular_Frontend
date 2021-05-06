import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PieChartComponent } from './Component/pie-chart/pie-chart.component';
import { UserDetailComponent } from './Component/user-detail/user-detail.component';


const routes: Routes = [
  {path: 'user-detail' , component: UserDetailComponent},
  {path: 'pie-chart',    component: PieChartComponent},
  {path: '', redirectTo: 'user-detail', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

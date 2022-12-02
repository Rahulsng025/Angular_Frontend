import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LanguageComponent } from './Component/language/language.component';
import { PieChartComponent } from './Component/pie-chart/pie-chart.component';
import { UserDetailComponent } from './Component/user-detail/user-detail.component';
import { RecordsComponent } from './records/records.component';


const routes: Routes = [
  {path: 'user-detail' , component: UserDetailComponent},
  {path: 'pie-chart',    component: PieChartComponent},
  {path: 'language', component: LanguageComponent},
  {path: 'records', component: RecordsComponent},

  {path: '', redirectTo: 'user-detail', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

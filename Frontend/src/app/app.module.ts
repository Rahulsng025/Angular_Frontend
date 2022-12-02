import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartService } from './Service/chart.service';
import { UserDetailComponent } from './Component/user-detail/user-detail.component';
import { PieChartComponent } from './Component/pie-chart/pie-chart.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { ChartLayoutComponent } from './Component/user-detail/chart-layout/chart-layout.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NavBarComponent } from './Component/nav-bar/nav-bar.component';
import { LanguageComponent } from './Component/language/language.component';
import { RecordsComponent } from './records/records.component';


@NgModule({
	declarations: [ AppComponent, UserDetailComponent, PieChartComponent, ChartLayoutComponent, NavBarComponent, LanguageComponent, RecordsComponent ],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		ChartsModule,
		FormsModule,
		ReactiveFormsModule,
		BrowserAnimationsModule,
		MatToolbarModule,
		MatButtonModule,
		MatTableModule,
		MatGridListModule,
		MatDialogModule,
		MatIconModule,
		MatFormFieldModule,
	
    MatInputModule
	],
	providers: [ ChartService ],
	bootstrap: [ AppComponent ]
})
export class AppModule {}

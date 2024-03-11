import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { StudentListComponent } from './Pages/student-list/student-list.component';
import { HeaderComponent } from './Components/header/header.component';
import { ListComponent } from './Components/list/list.component';
import { PercentagePipe } from './Components/Pipes/percentage.pipe';
import { GradePipe } from './Components/Pipes/grade.pipe';
import { TableComponent } from './Components/list/table/table.component';
import { FilterToolsComponent } from './Components/list/filter-tools/filter-tools.component';
import { RoutingModule } from './app-routing.module';
import { ErrorComponent } from './Components/error/error.component';
import { PaginationComponent } from './Components/list/pagination/pagination.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentListComponent,
    HeaderComponent,
    ListComponent,
    PercentagePipe,
    GradePipe,
    TableComponent,
    FilterToolsComponent,
    ErrorComponent,
    PaginationComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

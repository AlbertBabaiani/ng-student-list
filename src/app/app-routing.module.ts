import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentListComponent } from './Pages/student-list/student-list.component';
import { ErrorComponent } from './Components/error/error.component';

const routes: Routes = [
  { path: '', component: StudentListComponent },
  { path: 'error', component: ErrorComponent },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }

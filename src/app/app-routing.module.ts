import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormUserComponent } from './form-user/form-user.component';
import { ShowUserDataComponent } from './show-user-data/show-user-data.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  { path: '', component: FormUserComponent, },
  { path: 'usuario', component: ShowUserDataComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
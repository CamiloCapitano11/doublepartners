import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule  } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { JwPaginationModule } from 'jw-angular-pagination';
import { Routes, RouterModule } from '@angular/router';
import { FormUserComponent } from './form-user/form-user.component';
import { ShowUserDataComponent } from './show-user-data/show-user-data.component';
import { NgChartsModule } from 'ng2-charts';

const rutas: Routes = [
  { path: '', component: FormUserComponent },
  { path: 'usuario/:user', component: ShowUserDataComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    FormUserComponent,
    ShowUserDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
    JwPaginationModule,
    RouterModule.forRoot(rutas),
    NgChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

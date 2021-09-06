import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { UserI } from '../models/userModel.interface';
import { searchUserI } from '../models/searchUserModel.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.scss']
})
export class FormUserComponent implements OnInit {

  userForm = new FormGroup({
    user: new FormControl('', Validators.compose([
      Validators.required,
      Validators.minLength(4)
    ]))
  });
  errorStatus: boolean = false;
  errorMsg: any = "";
  users: any;
  pageOfItems: any;

  constructor(private api: ApiService, private router: Router) {}

  ngOnInit(): void {
    this.users = Array().fill(0);
  }

  onSearch(form: UserI){
    if(form.user != "doublevpartners"){
      if(form.user != ""){
        this.api.getDataByUsername(form).subscribe(data =>{
          debugger
          let dataResponse: searchUserI = data;
          if(dataResponse.items.length > 0){
            this.users = dataResponse.items;
            this.errorStatus = false;
          }
          else{
            this.errorStatus = true;
            this.errorMsg = "Usuario no encontrado en nuestro sistema.";
          }
        })
      }
    }
    else
    {
      this.errorStatus = true;
      this.errorMsg = "No se permite ver los datos de este usuario";
    }
  }

  seeCredential(user: string){
    debugger
    console.log(user);
    localStorage.setItem("user", user);
  }

  generateBars(userLogin: any){
    this.api.getAllDataByUser(userLogin).subscribe(data =>{
      debugger
      
    })
  }

  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
  }
}

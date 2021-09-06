import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { dataUserI } from '../models/dataUser.interface';

@Component({
  selector: 'app-show-user-data',
  templateUrl: './show-user-data.component.html',
  styleUrls: ['./show-user-data.component.scss']
})
export class ShowUserDataComponent implements OnInit {

  user: any;
  constructor(private api: ApiService) { }

  ngOnInit(): void {
    debugger
    let userLogin = localStorage.getItem("user");
    this.api.getAllDataByUser(userLogin).subscribe(data =>{
      debugger
      this.user = data;
    })
  }

}

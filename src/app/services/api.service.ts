import { Injectable } from "@angular/core";
import { searchUserI } from "../models/searchUserModel.interface";
import { UserI } from "../models/userModel.interface";
import { dataUserI } from "../models/dataUser.interface";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class ApiService{
    
    url: string = "https://api.github.com/search/users?q=";
    urlUser: string = "https://api.github.com/users/";

    constructor(private http: HttpClient){}

    getDataByUsername(form: UserI): Observable<searchUserI>{
        debugger
        let urlService = this.url + form.user;
        return this.http.get<searchUserI>(urlService);
    }

    getAllDataByUser(login: any): Observable<dataUserI>{
        debugger
        let urlServiceData = this.urlUser + login;
        return this.http.get<dataUserI>(urlServiceData);
    }
}
import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/internal/Observable";
import { map, first, last } from "rxjs/operators";
import { UserInterface } from "../models/user-interface";
@Injectable({
  providedIn: 'root'
})
export class DataAppService {
  constructor(private http: HttpClient) { }
  users: Observable<any>;
  user: Observable<any>;
  public selectedUser: UserInterface = {
    id:null,
    first_name:'',
    last_name:'',
    avatar:''
  };
  headers : HttpHeaders = new HttpHeaders({
    "Content-Type": "application/json",
  })
  headersx : HttpHeaders = new HttpHeaders({
    "Content-Type": "application/x-www-form-urlencoded",
  })
  getAll(){
    const url_api='https://reqres.in/api/users?page=1';
    return this.http.get(url_api);
  }
  getUserId(id: string){
    const url_api=`https://reqres.in/api/users/${id}`;
    return this.http.get(url_api);
  }
  saveUser(user: URLSearchParams){
    const url_api=`https://reqres.in/api/users`;
    return this.http.post<UserInterface>(url_api, user.toString(),{headers: this.headersx})
    //.subscribe();
  }
  

  updteUser(user: URLSearchParams){
    const url_api=`https://reqres.in/api/users`;
    return this.http.put<UserInterface>(url_api, user.toString(),{headers: this.headersx})
    ///.pipe(map(data=>data));
  }
}

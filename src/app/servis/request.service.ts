import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class RequestService {


  constructor( public http:HttpClient,public router: Router
  ) { }

  getData<T>(url:string){
    return this.http.get<T>(url);
  }
  postData<Type>(url: string, value: Type) {
    let headers = new HttpHeaders({ 'Content-type': 'application/json' });
    return this.http.post(url, value, { headers: headers });
  }

  putData<Type>(url: string, value: Type) {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put(url, value, { headers: headers });
  }

  deleteData(url: string, id: number) {
    return this.http.delete(url + '/' + id);
  }

  // Admin page for Login page
  setToken(token: string) {
    localStorage.setItem('token', token);
  }
  getToken() {
    return localStorage.getItem('token');
  }

  logout(){
    if(confirm("Are you sure?")){
      localStorage.removeItem('token');
      this.router.navigate(['login']);
    }
  }

  isLogined(){
    return this.getToken() !== null;
  }

  login<Type>(url: string, value: Type) {
    let headers = new HttpHeaders({'Content-Type': 'application/json'})
    return this.http.post(url, value, {headers: headers});
  }

}



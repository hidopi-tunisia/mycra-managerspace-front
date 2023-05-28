import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }


  login(data:any)
  {
    this.http.post('',data).subscribe((token:string)=>{
      this.setSession(token)
    })

  }
  
  getCurrentUser(){
    let token =sessionStorage.getItem('token')
    let user:any=jwt_decode(token)
    return this.http.get(`url/${user.id}`)
  }

  getRole(){
    let token =sessionStorage.getItem('token')
    let user:any=jwt_decode(token)
    return user?.role
  }

  logOut(){
    sessionStorage.removeItem('token')
  }

  get isLogging():boolean{
    return true
  }

  setSession(data){
    sessionStorage.setItem('token',data)
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CoreConfigService } from '@core/services/config.service';
import { environment } from 'environments/environment';
import jwt_decode from 'jwt-decode';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
currentUser:BehaviorSubject<any>=new BehaviorSubject(null)
  constructor(
    private http:HttpClient,private _toastrService:ToastrService,
    private router :Router,
    private _coreConfigService: CoreConfigService,
    ) { 
    let token =sessionStorage.getItem('token')
    if(token){
      let user:any=jwt_decode(token)
     this.http.get(`${environment.apiUrl}/user/getbyid/${user._id}`).subscribe((data)=>{
      this.currentUser.next(data)
     })
    }else{
      this.currentUser.next(null)
    }
  }


  get isAdmin() {
    return this.currentUser && this.currentUser.value.role === 'manager';
  }

  login(email: string, password: string) {
    return this.http
      .post<any>(`${environment.apiUrl}/user/login`, { email:email,password: password })
      .subscribe((data) => {
        console.log(data)
          // login successful if there's a jwt token in the response
          if (data.token) {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            sessionStorage.setItem('token', JSON.stringify(data.token));
            
           
            this.setUser()
            this.router.navigateByUrl('/home')
            this._coreConfigService.config = {
              layout: {
                navbar: {
                  hidden: false
                },
                menu: {
                  hidden: false
                },
                footer: {
                  hidden: false
                },
                customizer: true,
                enableLocalStorage: true
              }
            };
         
          }
        }
      );
  }

  register(data:any) {
    return this.http
      .post<any>(`${environment.apiUrl}/user/register`, data)
      
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('token');
    // notify
    this.currentUser.next(null);
  }
 
  
  getCurrentUser(){
    return this.currentUser.asObservable()
  }

  getRole(){
    let token =sessionStorage.getItem('token')
    if(token){
    let user:any=jwt_decode(token)
    return user?.role
    }else{
      return null
    }
  }

  get isLogging():boolean{
    if(this.currentUser.value){
      return true
    }else{
      return false
    }
  }
  setUser(){
    let token =sessionStorage.getItem('token')
    if(token){
      let user:any=jwt_decode(token)

      this.http.get(`${environment.apiUrl}/user/getbyid/${user._id}`).subscribe((data)=>{
      this.currentUser.next(data)
      if(user.role=='manager'){
         // Display welcome toast!
         setTimeout(() => {
          this._toastrService.success(
            'You have successfully logged in' ,'Welcome !!',
            { toastClass: 'toast ngx-toastr', closeButton: true }
          );
        }, 2500);
      }else{
         // Display welcome toast!
         setTimeout(() => {
          this._toastrService.warning(
            'You have not the right to log in ' ,'BY !!',
            { toastClass: 'toast ngx-toastr', closeButton: true }
          );
        }, 2500);
      }
     })
    }else{
      this.currentUser.next(null)
    }

    
  }

  getLinkReset(email:any){ 
    return this.http
      .post<any>(`${environment.apiUrl}/user/getResetPasswordLink`, email)

  }

  resetPassword(data:any,token:any){
    return this.http
    .post<any>(`${environment.apiUrl}/user/resetPassword/${token}`, data)
  }
  

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConsultantService {
  APIURL="http://127.0.0.1:3000/consultant"
  constructor(private http:HttpClient) { }

  getAllConsultants(){
    return this.http.get(`${this.APIURL}/getall`)
  }
  addConsultant(consultant){
   return this.http.post(`${this.APIURL}/create`,consultant)
  }
  updateConsultant(consultant){
    return this.http.put(`${this.APIURL}/update/${consultant._id}`,consultant)
  }
  deleteConsultant(id){
    return this.http.delete(`${this.APIURL}/delete/${id}`)
  }
  getOne(id){
    return this.http.get(`${this.APIURL}/getbyid/${id}`)
  }

  getByIdProjet(id:any){
    return new Promise((resolve,reject)=>{
      this.http.get(`${this.APIURL}/idProjet/${id}`).subscribe((data:any[])=>{
         resolve(data.length)
       })
    })
  }
 
}

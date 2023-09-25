import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConsultantService {
  APIURL="http://backend:3000/consultant"
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
 
}

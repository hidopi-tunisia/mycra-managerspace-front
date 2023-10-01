import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class ProjetService {

  APIURL="http://4.232.0.236:8080/projet"
  constructor(private http:HttpClient) { }

  getAllProjets(){
    return this.http.get(`${this.APIURL}/getall`)
  }
  addProjet(projet){
   return this.http.post(`${this.APIURL}/create`,projet)
  }
  updateProjet(projet){
    return this.http.put(`${this.APIURL}/update/${projet._id}`,projet)
  }
  deleteProjett(id){
    return this.http.delete(`${this.APIURL}/delete/${id}`)
  }
 }

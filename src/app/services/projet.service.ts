import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class ProjetService {

  APIURL="http://127.0.0.1:3000/projet"
  constructor(private http:HttpClient) { }

  getAllProjets(){
    return this.http.get(`${this.APIURL}/getall`)
  }
  getProjet(id){
    return this.http.get(`${this.APIURL}/getbyid/${id}`)
  }
  
 
  addProjet(projet){
   return this.http.post(`${this.APIURL}/create`,projet)
  }
  updateProjet(projet){
    return this.http.put(`${this.APIURL}/update/${projet._id}`,projet)
  }
  deleteProjet(id){
    return this.http.delete(`${this.APIURL}/delete/${id}`)
  }
 }

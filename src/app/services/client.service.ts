import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
APIURL="http://4.232.0.236:8080/client"
  constructor(private http:HttpClient) { }

  getAllClients(){
    return this.http.get(`${this.APIURL}/all`)
  }
  getClient(id){
    return this.http.get(`${this.APIURL}/getbyid/${id}`)
  }
  addClient(client){
   return this.http.post(`${this.APIURL}/create`,client)
  }
  updateClient(client){
    return this.http.put(`${this.APIURL}/update/${client._id}`,client)
  }
  deleteClient(id){
    return this.http.delete(`${this.APIURL}/delete/${id}`)
  }

 
}

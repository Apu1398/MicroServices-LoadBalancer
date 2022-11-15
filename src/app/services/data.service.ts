import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Gasto } from '../model/gasto';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private baseUrl = "http://34.127.59.189";

  constructor(private http:HttpClient) { }

  crearGasto(gasto:Gasto){
    let url = this.baseUrl + "/Finanzas";
    return this.http.post<Gasto>(url, gasto);    
  }
}

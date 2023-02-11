import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private API_URL = environment.API_URL
  constructor(private http: HttpClient) { }

  login(data:any){
    return this.http.post(this.API_URL +"/"+"login",data)
  }
  getlogin(){
    return this.http.get(this.API_URL +"/"+"products")
  }
}

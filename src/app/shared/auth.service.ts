import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { tap } from 'rxjs/operators'
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  token: string = null

  //public auth_admin = new Subject() 

  constructor(private http: HttpClient) { }

  // notifyAuth(){
  //     this.auth_admin.next();
  // }

  login(admin){
    return this.http.post(`http://localhost:3000/api/auth/login`, admin)
      .pipe(
        tap(this.setToken)
      )
  }

  isAuthenticated(){
    if(localStorage.getItem('admin-auth')){
      return true
    }
  }

  setToken(response){
    if(response){
      localStorage.setItem('admin-auth', response.token)
      this.token = response.token
    } else {
      localStorage.clear()
    }
  }


}

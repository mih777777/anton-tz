import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  token: string = null
  url: string = 'http://localhost:3000'

  constructor(private http: HttpClient) { }

  login(admin){
    return this.http.post(`${this.url}/api/auth/login`, admin)
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

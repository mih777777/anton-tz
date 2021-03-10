import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
//import { Observable } from 'rx/js/operators'

interface Customer{
  name: string,
  email: string,
  phone: number
}

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  url: string = 'http://localhost:3000';
  //url: string = 'https://graph-server777.herokuapp.com'

  constructor(private http: HttpClient) { }

  create_customer(data) {
    return this.http.post(`${this.url}/api/customer/create-customer`, data);
  }

  fetch_customers() {
    return this.http.get(`${this.url}/api/customer/customers`);
  }


}

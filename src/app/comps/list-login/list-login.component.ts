import { Component, OnInit } from '@angular/core';
import { CustomersService } from 'src/app/shared/customers.service';


@Component({
  selector: 'app-list-login',
  templateUrl: './list-login.component.html',
  styleUrls: ['./list-login.component.scss']
})
export class ListLoginComponent implements OnInit {

  data: any

  constructor(private service: CustomersService) { }

  ngOnInit(): void {
    this.getAllCustomers()
  }

  getAllCustomers(){
    this.service.fetch_customers()
      .subscribe((data) => {
        this.data = data
        //console.log(this.data)      
      })
  }

}

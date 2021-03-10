import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomersService } from 'src/app/shared/customers.service';

interface Customer{
  name: string,
  email: string,
  phone: number
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  //customer: Customer[] = []
  customer: any[] = []

  form: FormGroup

  constructor(private service: CustomersService) { }

  ngOnInit(): void {
    
    this.form = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      phone: new FormControl(null, [Validators.required])
      
    })

  }

  addCustomer(){
    const formData = { ...this.form.value }

    this.service.create_customer({
      name: formData.name,
      email: formData.email,
      phone: formData.phone, 
    }).subscribe(data => {
      //console.log(data)
      this.customer.push(data)
      console.log(this.customer)
      this.ngOnInit()
      this.form.reset()
    })
  }

}

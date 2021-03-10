import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomersService } from 'src/app/shared/customers.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  customer: any[] = []

  form: FormGroup

  constructor(private service: CustomersService) { }

  ngOnInit(): void {
    
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [
        Validators.email,
        Validators.required
      ]),
      phone: new FormControl('', [Validators.required])
      
    })

  }

  addCustomer(){
    this.form.disable()
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

import { Component,inject } from '@angular/core';
import { Firestore, doc, docData} from '@angular/fire/firestore';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Customers } from 'src/models/customers.class';
import { DialogEditCustomerComponent } from '../dialog-edit-customer/dialog-edit-customer.component';
import { DialogDeleteCustomerComponent } from 'src/app/dialog-delete-customer/dialog-delete-customer.component';

@Component({
  selector: 'app-customers-detail',
  templateUrl: './customers-detail.component.html',
  styleUrls: ['./customers-detail.component.scss']
})
export class CustomersDetailComponent {
  firestore: Firestore = inject(Firestore);
  customerId:any;
  customer:Customers = new Customers();

  constructor(private route: ActivatedRoute,public dialog: MatDialog) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe( paramMap => {
      this.customerId = paramMap.get('id');
      console.log('got this id:', this.customerId)
      this.getUser();
      
    })
  }

  getUser() {
    let db = doc(this.firestore, `customers/${this.customerId}`);    
    docData(db).subscribe((customer: any) => {
      this.customer = new Customers(customer);  
      console.log(customer.name);
      
    })
  } 



  editCustomer(){
    const dialog = this.dialog.open(DialogEditCustomerComponent)
    dialog.componentInstance.customer = new Customers(this.customer.toJSON());
    dialog.componentInstance.customerId = this.customerId;
  }

  deleteCustomer(){
    const dialog = this.dialog.open(DialogDeleteCustomerComponent)
    dialog.componentInstance.customer = new Customers(this.customer.toJSON());
    dialog.componentInstance.customerId = this.customerId;
  }
 
}

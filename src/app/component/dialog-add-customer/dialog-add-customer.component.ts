import { Component,inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Customers } from 'src/models/customers.class';
import { Firestore, addDoc, collection } from '@angular/fire/firestore';

@Component({
  selector: 'app-dialog-add-customer',
  templateUrl: './dialog-add-customer.component.html',
  styleUrls: ['./dialog-add-customer.component.scss']
})
export class DialogAddCustomerComponent {

  customer: Customers = new Customers()
  firestore: Firestore = inject(Firestore)
  db;
  loading = false;
  customerId:any;
  

 

  constructor(public dialogRef: MatDialogRef<DialogAddCustomerComponent>) {
    this.db = collection(this.firestore, 'customers');
  }



  saveCustomer():void{

    console.log(this.customer)
    this.loading =true;
    
    addDoc(this.db, this.customer.toJSON()).then((result: any) => {
      this.loading = false;
      console.log('finished', result);
      this.dialogRef.close()

    })
  }
}

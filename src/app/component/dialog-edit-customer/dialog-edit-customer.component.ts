import { Component,inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Customers } from 'src/models/customers.class';
import { Firestore, addDoc, collection, doc, updateDoc } from '@angular/fire/firestore';

@Component({
  selector: 'app-dialog-edit-customer',
  templateUrl: './dialog-edit-customer.component.html',
  styleUrls: ['./dialog-edit-customer.component.scss']
})
export class DialogEditCustomerComponent {
  firestore: Firestore = inject(Firestore);
  customer!: Customers;
  customerId!: string;
  loading = false;
  
  constructor(public dialogRef: MatDialogRef<DialogEditCustomerComponent>) {}

  saveCustomer() {
    this.loading = true;
    const db = doc(this.firestore, `customers/${this.customerId}`);
    updateDoc(db, this.customer.toJSON())
    .then(() => {
      this.dialogRef.close();
      this.loading = false;
    });
    
  }
}

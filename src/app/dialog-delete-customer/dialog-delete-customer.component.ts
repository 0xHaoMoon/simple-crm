import { Component,inject } from '@angular/core';
import { User } from 'src/models/user.class';
import { Firestore, deleteDoc, doc, updateDoc } from '@angular/fire/firestore';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Customers } from 'src/models/customers.class';

@Component({
  selector: 'app-dialog-delete-customer',
  templateUrl: './dialog-delete-customer.component.html',
  styleUrls: ['./dialog-delete-customer.component.scss']
})
export class DialogDeleteCustomerComponent {
  firestore: Firestore = inject(Firestore);
  customerId:any;
  customer:Customers = new Customers();

  constructor(private router: Router,public dialogRef: MatDialogRef<DialogDeleteCustomerComponent>) { }

  deleteCustomer(){
    const db = doc(this.firestore, `customers/${this.customerId}`);
    deleteDoc(db)
    .then(() => {     
      this.dialogRef.close();
      this.router.navigate(['customers']);
    }); 
    
  }
}

import { Component,OnInit,inject } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { Customers } from 'src/models/customers.class';
import { Firestore, addDoc, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent {


  user: Customers = new Customers()
  firestore: Firestore = inject(Firestore)
  customers$: Observable<any>;
  allCustomers:any;

  constructor(public dialog: MatDialog){
    const db = collection(this.firestore, 'customers');
    this.customers$ = collectionData(db, { idField: 'id' });
    
  }

  ngOnInit(): void {
    this.customers$.subscribe((changes) => {
      this.allCustomers = changes;
      console.log(changes);
    });
  }

  
  openDialog(){
    this.dialog.open(DialogAddUserComponent)
  }

}

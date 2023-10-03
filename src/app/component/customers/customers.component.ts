import {Component, OnInit, ViewChild,inject } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { Customers } from 'src/models/customers.class';
import { Firestore,collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { DialogAddCustomerComponent } from '../dialog-add-customer/dialog-add-customer.component';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';


@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss'],


})
export class CustomersComponent implements OnInit{


  customer: Customers = new Customers()
  firestore: Firestore = inject(Firestore)
  customers$: Observable<any>;
  allCustomers:any;

  displayedColumns: String[] = ['name','prio'];
  dataSource: MatTableDataSource<Customers>;


  @ViewChild(MatSort) sort!: MatSort;

  constructor(public dialog: MatDialog){
    const db = collection(this.firestore, 'customers');
    this.customers$ = collectionData(db, { idField: 'id' });
    this.dataSource = new MatTableDataSource();


  }

  ngOnInit() {
    this.customers$.subscribe((changes) => {
      this.allCustomers = changes;
      this.dataSource = new MatTableDataSource(changes);
      this.dataSource.sort = this.sort;
    });
    
  }



  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

  }


  
  openDialog(){
    this.dialog.open(DialogAddCustomerComponent)
  }

}

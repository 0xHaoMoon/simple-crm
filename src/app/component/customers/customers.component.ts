import { AfterViewInit, Component, OnInit, ViewChild,inject } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { Customers } from 'src/models/customers.class';
import { Firestore,collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { DialogAddCustomerComponent } from '../dialog-add-customer/dialog-add-customer.component';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';


@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss'],
  


})
export class CustomersComponent implements AfterViewInit,OnInit{


  user: Customers = new Customers()
  firestore: Firestore = inject(Firestore)
  customers$: Observable<any>;
  allCustomers:any;

  displayedColumns: string[] = ['name','priority'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(public dialog: MatDialog){
    const db = collection(this.firestore, 'customers');
    this.customers$ = collectionData(db, { idField: 'id' });
    this.dataSource = new MatTableDataSource();


  }

  ngOnInit() {
    this.customers$.subscribe((changes) => {
      this.allCustomers = changes;
      console.log(changes);
      this.dataSource = new MatTableDataSource(changes);
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


  
  openDialog(){
    this.dialog.open(DialogAddCustomerComponent)
  }

}

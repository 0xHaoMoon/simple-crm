import { Component,OnInit,ViewChild,inject } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';
import { User } from 'src/models/user.class';
import { Firestore,collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit{

  user: User = new User()
  firestore: Firestore = inject(Firestore)
  users$: Observable<any>;
  allUsers:any;

  displayedColumns: String[] = ['lastName','role','city'];
  dataSource: MatTableDataSource<User>;

  @ViewChild(MatSort) sort!: MatSort;

  constructor(public dialog: MatDialog){
    const db = collection(this.firestore, 'users');
    this.users$ = collectionData(db, { idField: 'id' });
    this.dataSource = new MatTableDataSource();
    
  }

  ngOnInit(): void {
    this.users$.subscribe((changes) => {
      this.allUsers = changes;
      console.log(changes);
      this.dataSource = new MatTableDataSource(changes);
      this.dataSource.sort = this.sort;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

  }


  
  openDialog(){
    this.dialog.open(DialogAddUserComponent)
  }

}

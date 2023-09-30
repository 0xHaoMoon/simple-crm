import { Component,OnInit,inject } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';
import { User } from 'src/models/user.class';
import { Firestore, addDoc, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

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

  constructor(public dialog: MatDialog){
    const db = collection(this.firestore, 'users');
    this.users$ = collectionData(db, { idField: 'id' });
    
  }

  ngOnInit(): void {
    this.users$.subscribe((changes) => {
      this.allUsers = changes;
      console.log(changes);
    });
  }

  
  openDialog(){
    this.dialog.open(DialogAddUserComponent)
  }

}

import { Component,inject } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';
import { User } from 'src/models/user.class';
import { Firestore, addDoc, collection } from '@angular/fire/firestore';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {

  user: User = new User()
  firestore: Firestore = inject(Firestore)
  db;

  constructor(public dialog: MatDialog){
    this.db = collection(this.firestore, 'users');
    
  }
  
  openDialog(){
    this.dialog.open(DialogAddUserComponent)
  }

}

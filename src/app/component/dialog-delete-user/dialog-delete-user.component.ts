import { Component,inject } from '@angular/core';
import { User } from 'src/models/user.class';
import { Firestore, deleteDoc, doc, updateDoc } from '@angular/fire/firestore';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dialog-delete-user',
  templateUrl: './dialog-delete-user.component.html',
  styleUrls: ['./dialog-delete-user.component.scss']
})
export class DialogDeleteUserComponent {
  firestore: Firestore = inject(Firestore);
  userId:any;
  user:User = new User();


  constructor(private router: Router,public dialogRef: MatDialogRef<DialogDeleteUserComponent>) { }

  ngOnInit(): void {}

  deleteUser(){
    const db = doc(this.firestore, `users/${this.userId}`);
    deleteDoc(db)
    .then(() => {     
      this.dialogRef.close();
      this.router.navigate(['user']);
    }); 
    
  }
}

import { Component,inject} from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/models/user.class';
import { Firestore, addDoc, collection } from '@angular/fire/firestore';

@Component({
  selector: 'app-dialog-add-user',
  templateUrl: './dialog-add-user.component.html',
  styleUrls: ['./dialog-add-user.component.scss']
})
export class DialogAddUserComponent {

  user: User = new User()
  birthDate! : Date;
  firestore: Firestore = inject(Firestore)
  db;
  loading = false;
  

 

  constructor(public dialogRef: MatDialogRef<DialogAddUserComponent>) {
    this.db = collection(this.firestore, 'users');
  }



  saveUser():void{
    this.user.birthDate = this.birthDate.getTime();
    this.loading =true;
    
    addDoc(this.db, this.user.toJSON()).then(() => {
      this.loading = false;
      this.dialogRef.close()
    })
  }
}

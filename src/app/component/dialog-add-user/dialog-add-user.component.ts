import { Component,inject} from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/models/user.class';
import { CollectionReference, Firestore, addDoc, collection, collectionData } from '@angular/fire/firestore';

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
  

 

  constructor(public dialogRef: MatDialogRef<DialogAddUserComponent>) {
    this.db = collection(this.firestore, 'users');
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  saveUser():void{
    this.user.birthDate = this.birthDate.getTime();
    console.log(this.user)

    const docRef= addDoc(this.db, this.user.toJSON())
      console.log('finished', docRef);
      this.dialogRef.close()
  
  }
}

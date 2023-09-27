import { Component,OnInit,inject } from '@angular/core';
import { Firestore, doc, docData} from '@angular/fire/firestore';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/models/user.class';
import { DialogEditAddressComponent } from '../dialog-edit-address/dialog-edit-address.component';
import { DialogEditUserComponent } from '../dialog-edit-user/dialog-edit-user.component';


@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit{
  firestore: Firestore = inject(Firestore);
  userId:any;
  user:User = new User();

  constructor(private route: ActivatedRoute,public dialog: MatDialog) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe( paramMap => {
      this.userId = paramMap.get('id');
      console.log('got id:', this.userId)
      this.getUser();
    })
  }

  getUser() {
    let db = doc(this.firestore, `users/${this.userId}`);
    
    docData(db).subscribe((user: any) => {
      this.user = new User(user);
      console.log(this.user);
    })
  } 

  editAddress(){
    const dialog = this.dialog.open(DialogEditAddressComponent)
    dialog.componentInstance.user = new User(this.user.toJSON()); // Nutzer kopieren und weitergeben. es wird ein ein neues objekt erstellt mit dem JSON das bereits vorhanden ist weitergeben
    dialog.componentInstance.userId = this.userId;
  }

  editUser(){
    const dialog = this.dialog.open(DialogEditUserComponent)
    dialog.componentInstance.user = new User(this.user.toJSON());
    dialog.componentInstance.userId = this.userId;
  }
 
}

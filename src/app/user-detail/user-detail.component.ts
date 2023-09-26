import { Component,OnInit,inject } from '@angular/core';
import { Firestore, doc, docData} from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/models/user.class';


@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit{
  firestore: Firestore = inject(Firestore);
  userId:any;
  user:User = new User();

  constructor(private route: ActivatedRoute) {}

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
 
}

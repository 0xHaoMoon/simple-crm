import { Component,OnInit,inject } from '@angular/core';
import { Firestore} from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit{
  firestore: Firestore = inject(Firestore);
  userId:any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe( paramMap => {
      this.userId = paramMap.get('id');
      console.log('got id:', this.userId)
    })
  }

}

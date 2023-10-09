import { Injectable,inject } from '@angular/core';
import { Firestore, collection,collectionData,doc} from '@angular/fire/firestore';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  firestore: Firestore = inject(Firestore)


  users$: Observable<any>;
  allUsers:any;

  constructor() {
    //get the ID
    this.users$ = collectionData(this.getUsersRef(),{ idField: 'id' });

    // subscribe users$
   this.users$.subscribe((changes)=>{
   this.allUsers = changes;
    })

    this.allUsers.unsubscribe
   }


  //get collection
  getUsersRef(){
    return collection(this.firestore, 'users');
  }

  //get collection
  getCustomersRef(){
    return collection(this.firestore, 'customers');
  }

  //get document ID from the collection
  getSingleDocRef(colId:string, docId:string){
    return doc(collection(this.firestore,colId),docId)
  }


}

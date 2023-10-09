import { Injectable,inject } from '@angular/core';
import { Firestore, collection,doc} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  firestore: Firestore = inject(Firestore)

  constructor() { }


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

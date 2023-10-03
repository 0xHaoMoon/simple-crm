import { Component,inject } from '@angular/core';
import {  Firestore, collection, getCountFromServer, query, where } from '@angular/fire/firestore';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  firestore: Firestore = inject(Firestore)

  amountUser!:number;
  amountAttack!:number;
  amountDefense!:number;
  amountMidfield!:number;

  amountCostumer!:number;
  amountA!:number;
  amountB!:number;
  amountC!:number;

  db = collection(this.firestore, 'users');
  dbU = collection(this.firestore, 'customers');

  constructor(){}

  async ngOnInit(): Promise<void> {
    await this.countUser();
    await this.countCostumer();
  }


  async countUser(){
    // Count Amount User
    const usersSnapshot = await getCountFromServer(this.db)
    this.amountUser = usersSnapshot.data().count;

     // Count Role Attack
    const a = query(this.db, where("role", "==", "Attack"));
    const snapshotA = await getCountFromServer(a);
    this.amountAttack=snapshotA.data().count;

      // Count Role Defense
    const d = query(this.db, where("role", "==", "Defense"));
    const snapshotD = await getCountFromServer(d);
    this.amountDefense=snapshotD.data().count;

      // Count Role Midfield
    const m = query(this.db, where("role", "==", "Midfield"));
    const snapshotM = await getCountFromServer(m);
    this.amountMidfield=snapshotM.data().count;

  }

  async countCostumer(){
    // Count Amount User
    const usersSnapshot = await getCountFromServer(this.dbU)
    this.amountCostumer = usersSnapshot.data().count;

     // Count Prio A
    const a = query(this.dbU, where("prio", "==", "A"));
    const snapshotA = await getCountFromServer(a);
    this.amountA=snapshotA.data().count;

     // Count Prio B
     const b = query(this.dbU, where("prio", "==", "B"));
     const snapshotB = await getCountFromServer(b);
     this.amountB=snapshotB.data().count;

      // Count Prio C
      const c = query(this.dbU, where("prio", "==", "C"));
      const snapshotC = await getCountFromServer(c);
      this.amountC=snapshotC.data().count;

  }

}
 
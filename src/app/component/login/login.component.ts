import { Component,inject } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Firestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  firestore: Firestore = inject(Firestore)
  hide = true;
  email!: string;
  password!:string;
 


  constructor(private router: Router) { }



  guestLog(){
      this.router.navigate(['dashboard']);
  }

  logIn(){
    const auth = getAuth();
signInWithEmailAndPassword(auth, this.email, this.password)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log('Log In successfully' + user)
    this.router.navigate(['/dashboard']);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode)
    console.log(errorMessage);
    alert("wrong email or passwort")
    this.email = ''
    this.password = ''
  });
  }

  
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  getEmailErrorMessage() {
    if (this.emailFormControl.hasError('required')) {
      return 'You must enter a e-mail';
    }
    return this.emailFormControl.hasError('email') ? 'Not a valid email' : '';
  }

  passwordFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(6), 
  ]);
  getPasswordErrorMessage() {
    if (this.passwordFormControl.hasError('required')) {
      return 'You must enter a password';
    }
    return this.passwordFormControl.hasError('minlength')
      ? 'Must be at least 6 characters'
      : '';
  }

}




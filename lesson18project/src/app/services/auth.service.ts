import { Injectable } from '@angular/core';
// import {AngularFireAuth, AngularFireAuthModule} from '@angular/fire/auth';
// import {AngularFireAuth} from 'angularfire2/auth';
import {map} from 'rxjs/operators';
import {AngularFireAuth} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private afAuth: AngularFireAuth
  ) { }

  login(email: string, password: string) {
    return new Promise((resolve, reject) => {
      this.afAuth.auth.signInWithEmailAndPassword(email, password)
        .then(userDate => resolve(userDate), err => reject(err));
    });
  }

  register(email: string, password: string) {
    return new Promise((resolve, reject) => {
      this.afAuth.auth.createUserWithEmailAndPassword(email, password)
        .then(userDate => resolve(userDate), err => reject(err));
    });
  }

  logout() {
    this.afAuth.auth.signOut();
  }

  getAuth() {
    return this.afAuth.authState.pipe(
      map(auth => auth)
    );
  }
}

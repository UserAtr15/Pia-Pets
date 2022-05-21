import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword,signInWithPopup, GoogleAuthProvider } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private auth: Auth) {}

  async register(email:string, password: string) {
    try {
      return await createUserWithEmailAndPassword(this.auth, email, password);
    }catch (err) {
      console.log("Error en registro", err);
      return null;
    }
  }

  async login(email:string, password: string) {
    try{
      return await signInWithEmailAndPassword(this.auth, email,password);
    } catch (err) {
      console.log("Error en login", err);
      return null;
    }
  }

  async loginWithGoogle() {
    try {
      return await signInWithPopup(this.auth, new GoogleAuthProvider());
    } catch (err){
      console.log("Error en login con google");
      return null;
    }

  }

  logout(){
    this.auth.signOut();
  }
}

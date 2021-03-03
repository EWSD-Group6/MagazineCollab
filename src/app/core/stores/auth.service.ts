import { Injectable } from '@angular/core';
import { makeAutoObservable, reaction } from 'mobx';
import { localdata } from './localdata';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authenticated = localdata.authenticated;

  constructor() {
    makeAutoObservable(this);
    // sync to localdata
    // https://mobx.js.org/reactions.html
    reaction(
      () => this.authenticated,
      (auth) => (localdata.authenticated = auth)
    );
  }

  changeAuthenticated(value: boolean) {
    this.authenticated = value;
  }
}

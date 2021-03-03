import { Injectable } from '@angular/core';
import { makeAutoObservable } from 'mobx';

@Injectable()
export class HomeViewModel {
  showReady = true;
  showFinish = false;

  constructor() {
    makeAutoObservable(this);
  }

  start() {
    console.log('start');
    this.showReady = false;
  }

  finish() {
    console.log('finish');

    this.showFinish = true;
  }

  close() {
    this.showFinish = false;
  }
}

import { Injectable } from '@angular/core';
import { promiseHelper } from 'src/app/helpers/promise.helper';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor() {}

  login(username: string, password: string): Promise<any> {
    return promiseHelper.delay(1000);
  }
}

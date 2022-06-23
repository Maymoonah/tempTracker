import { Injectable } from '@angular/core';
import { Observable ,Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private userInput = new Subject<any>();

  constructor() { }

  sendInfo(data: string) {
    this.userInput.next(data);
  }

  getUserInput(): Observable<any> {
    return this.userInput.asObservable();
  }

}

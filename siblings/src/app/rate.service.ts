import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RateService {
  private dataSource = new BehaviorSubject<string>('default message');
  currentData = this.dataSource.asObservable();

  constructor() { }
 
  changeData(data: string) {
    this.dataSource.next(data);
    
  }

}

import { Component, OnInit, Output } from '@angular/core';
import { RateService } from '../rate.service';
import { FormsModule } from '@angular/forms';
import EventEmitter from 'events';
@Component({
  selector: 'app-child1',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './child1.component.html',
  styleUrl: './child1.component.scss'
})
export class Child1Component implements OnInit {
  data: any;

  constructor(private rate:RateService){}
  ngOnInit(): void {
    
  }
  sendData(){
    this.rate.changeData(this.data);
  }
  
 
}

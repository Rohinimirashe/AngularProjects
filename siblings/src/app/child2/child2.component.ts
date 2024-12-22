import { Component, OnInit } from '@angular/core';
import { RateService } from '../rate.service';

@Component({
  selector: 'app-child2',
  standalone: true,
  imports: [],
  templateUrl: './child2.component.html',
  styleUrl: './child2.component.scss'
})
export class Child2Component implements OnInit {
  data:string | undefined;
  constructor(private rate:RateService){}
ngOnInit(): void {
 this.rate.currentData.subscribe(data => this.data = data);
  // this.rate.changeData().subscribe(data:any=>{
  //   this.data=data;
  // })
  
}

}

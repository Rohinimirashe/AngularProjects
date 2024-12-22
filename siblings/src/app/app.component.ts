import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { FormArrayComponent } from './form-array/form-array.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,Child1Component,Child2Component,FormArrayComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'siblings';
  form1:any[]=[];
  handler(){
    this.title+1;
  }
  form(arr:any){
  this.form1.push(arr);
}
}

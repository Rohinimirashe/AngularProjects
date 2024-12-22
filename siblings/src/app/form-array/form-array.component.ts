import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-form-array',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './form-array.component.html',
  styleUrl: './form-array.component.scss'
})
export class FormArrayComponent {
  // da: [] | undefined;

  constructor(public fb:FormBuilder){}
  userdata!: FormGroup;
  @Output() data1=new EventEmitter();
  data:any[]=[];
 ngOnInit(){
this.userdata= this.fb.group({
first:["", Validators.required],
last:["",Validators.required],
city:["",Validators.required]
})
 }
 submit(){
console.log(this.userdata.value)
//  const da=this.userdata.value;
this.data.push(this.userdata.value);
console.log(this.data,"Rohini")
this.data1.emit(this.data);

 }
}

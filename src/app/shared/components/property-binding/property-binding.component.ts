import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.scss']
})
export class PropertyBindingComponent implements OnInit {

  fname : string = `Do the best you can`;
  lname : string = `Do what you can, with what you have, where you are`;
  id : number = 1234;
  contact : string = `It's never too late to be what you might've been`;

  add : string = `f you can dream it, you can do it.` ;
  constructor() { }

  ngOnInit(): void {
  }

}

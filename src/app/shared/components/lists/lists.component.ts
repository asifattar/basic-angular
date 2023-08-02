import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss']
})
export class ListsComponent implements OnInit {

  skills : Array<string> = [`html`,`css`,`java`,`javascript`,`angular`];
  stringArray: string[] = ["apple", "banana", "orange", "grape", "watermelon"];
  mobile : string[] = ["iphone","samsung","onePlus","mi","oppo","realMe"];
  city : string[] =["Delhi", "Mumbai", "Chennai", "Kolkata", "Bengaluru"];
  
  constructor() { }

  ngOnInit(): void {
  }

}

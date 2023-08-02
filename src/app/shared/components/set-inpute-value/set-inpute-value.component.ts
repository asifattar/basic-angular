import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-set-inpute-value',
  templateUrl: './set-inpute-value.component.html',
  styleUrls: ['./set-inpute-value.component.scss']
})
export class SetInputeValueComponent implements OnInit {

  userName1 : string = "Asif"
  email : string = "asifattar3570@gmail.com"
  contact : number = 8625997232

  constructor() { }

  ngOnInit(): void {
  }

}

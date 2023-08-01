import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss']
})
export class ListsComponent implements OnInit {

  skills : Array<string> = [`html`,`css`,`java`,`javascript`,`angular`]
  constructor() { }

  ngOnInit(): void {
  }

}

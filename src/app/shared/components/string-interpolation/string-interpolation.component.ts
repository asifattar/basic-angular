import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-string-interpolation',
  templateUrl: './string-interpolation.component.html',
  styleUrls: ['./string-interpolation.component.scss']
})
export class StringInterpolationComponent implements OnInit {
  public fName : string = "asif";
  public lName : string = "attar";
  public contact : number = 8625997232;
  public age : number = 25;
  public city : string = "udgir";


  constructor() { }

  ngOnInit(): void {
  }

}

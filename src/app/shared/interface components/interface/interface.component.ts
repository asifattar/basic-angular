import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interface',
  templateUrl: './interface.component.html',
  styleUrls: ['./interface.component.scss']
})
export class InterfaceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
}

interface Product {
  productName: string;
  modelNo: number;
  price: number;
  camera: string;
  processor: string;
  battery: string;
  launchDate: string;
}
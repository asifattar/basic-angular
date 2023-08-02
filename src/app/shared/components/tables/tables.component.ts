import { Component, OnInit } from '@angular/core';

interface Product {
  productName: string;
  modelNo: number;
  price: number;
  camera: string;
  processor: string;
  battery: string;
  launchDate: string;
}

interface Table {
  id: number;
  name: string;
  material: string;
  shape: string;
  dimensions: string;
  color: string;
  price: number;
  inStock: boolean;
}

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  products: Product[] = [
    {
      productName: 'iPhone',
      modelNo: 14,
      price: 99000,
      camera: 'Dual 12 MP',
      processor: 'A15 Bionic',
      battery: '3500 mAh',
      launchDate: '2023-01-01',
    },
    {
      productName: 'Samsung Galaxy',
      modelNo: 20,
      price: 80000,
      camera: 'Triple 108 MP',
      processor: 'Exynos 990',
      battery: '4000 mAh',
      launchDate: '2022-11-15',
    },
    {
      productName: 'Google Pixel',
      modelNo: 6,
      price: 75000,
      camera: 'Dual 12.2 MP',
      processor: 'Snapdragon 888',
      battery: '3800 mAh',
      launchDate: '2023-02-28',
    },
    {
      productName: 'OnePlus 9',
      modelNo: 9,
      price: 69900,
      camera: 'Quad 48 MP',
      processor: 'Snapdragon 888',
      battery: '4500 mAh',
      launchDate: '2023-03-15',
    },
    {
      productName: 'Xiaomi Mi 11',
      modelNo: 11,
      price: 59999,
      camera: 'Triple 108 MP',
      processor: 'Snapdragon 888',
      battery: '4600 mAh',
      launchDate: '2023-04-01',
    },
    {
      productName: 'Sony Xperia 1 III',
      modelNo: 1,
      price: 1199.99,
      camera: 'Triple 12 MP',
      processor: 'Snapdragon 888',
      battery: '4500 mAh',
      launchDate: '2022-12-10',
    },
    {
      productName: 'LG Velvet 2 Pro',
      modelNo: 2,
      price: 899.99,
      camera: 'Quad 64 MP',
      processor: 'Snapdragon 888',
      battery: '4300 mAh',
      launchDate: '2023-05-20',
    },
    {
      productName: 'Motorola Edge+',
      modelNo: 8,
      price: 89900,
      camera: 'Triple 108 MP',
      processor: 'Snapdragon 870',
      battery: '5000 mAh',
      launchDate: '2023-06-05',
    },
    {
      productName: 'Nokia 10',
      modelNo: 10,
      price: 74999,
      camera: 'Penta 108 MP',
      processor: 'Snapdragon 895',
      battery: '4800 mAh',
      launchDate: '2023-07-15',
    },
    {
      productName: 'Huawei P50 Pro',
      modelNo: 15,
      price: 1099.99,
      camera: 'Penta 50 MP',
      processor: 'Kirin 9000',
      battery: '4200 mAh',
      launchDate: '2023-08-01',
    },
  ];
  
  tables: Table[] = [
    {
      id: 1,
      name: 'Dining Table',
      material: 'Wood',
      shape: 'Rectangular',
      dimensions: '180cm x 90cm x 75cm',
      color: 'Brown',
      price: 599.99,
      inStock: true,
    },
    {
      id: 2,
      name: 'Coffee Table',
      material: 'Glass',
      shape: 'Oval',
      dimensions: '120cm x 60cm x 45cm',
      color: 'Clear',
      price: 199.99,
      inStock: true,
    },
    {
      id: 3,
      name: 'Study Table',
      material: 'Metal',
      shape: 'Rectangular',
      dimensions: '120cm x 70cm x 75cm',
      color: 'Black',
      price: 299.99,
      inStock: false,
    },
    {
      id: 4,
      name: 'Side Table',
      material: 'Wood',
      shape: 'Square',
      dimensions: '50cm x 50cm x 55cm',
      color: 'White',
      price: 89.99,
      inStock: true,
    },
    {
      id: 5,
      name: 'Outdoor Table',
      material: 'Plastic',
      shape: 'Round',
      dimensions: '100cm x 100cm x 70cm',
      color: 'Green',
      price: 129.99,
      inStock: true,
    },
    {
      id: 6,
      name: 'Console Table',
      material: 'Wood',
      shape: 'Semicircular',
      dimensions: '100cm x 40cm x 75cm',
      color: 'Walnut',
      price: 169.99,
      inStock: true,
    },
    {
      id: 7,
      name: 'Folding Table',
      material: 'Plastic',
      shape: 'Rectangular',
      dimensions: '120cm x 60cm x 70cm',
      color: 'White',
      price: 79.99,
      inStock: false,
    },
    {
      id: 8,
      name: 'Center Table',
      material: 'Glass',
      shape: 'Round',
      dimensions: '80cm x 80cm x 45cm',
      color: 'Black',
      price: 249.99,
      inStock: true,
    },
    {
      id: 9,
      name: 'Corner Table',
      material: 'Wood',
      shape: 'Triangle',
      dimensions: '60cm x 60cm x 55cm',
      color: 'Brown',
      price: 109.99,
      inStock: true,
    },
    {
      id: 10,
      name: 'Bar Table',
      material: 'Metal',
      shape: 'Square',
      dimensions: '70cm x 70cm x 105cm',
      color: 'Silver',
      price: 179.99,
      inStock: true,
    },
  ];
  


}

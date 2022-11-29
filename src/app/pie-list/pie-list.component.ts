import { Component } from '@angular/core';
import { Pie } from './pie';

@Component({
  selector: 'app-pie-list',
  templateUrl: './pie-list.component.html',
  styleUrls: ['./pie-list.component.scss']
})
export class PieListComponent {
cackes: Pie [] =[
 {
  name:"Lemon Pie",
  description:"Base de galletitas de vainilla con manteca, crema de limón y merengue italiano.",
  price: 600,
  stock: 12,
  image:"assets/images/lemonPie.jpg",
  clearance: false,
}, 
{
name:"Torta Óreo",
description:"Base de galletitas Oreo con manteca, exquisita mousse de dulce de leche y trozos de chocolate semi amargo.",
price: 700,
stock: 8,
image:"assets/images/oreo.jpg",
clearance: false,
}, 

{
  name:"Torta de manzana",
  description:"Frola de vainilla y manzanas verdes, con una exquisita cobertura de strudel de almendras.",
  price: 550,
  stock: 5,
  image:"assets/images/manzana.jpg",
  clearance: true,
  },
  {
  name:"Torta tipo Balcarce",
  description:"  Pionono de vainilla, crema, dulce de leche natural, merengue y salsa de frambuesa.",
  price: 750,
  stock: 0,
  image:"assets/images/balcarce.jpg",
  clearance: false,
  },

];

constructor(){}
ngOnInit(): void {

}
}

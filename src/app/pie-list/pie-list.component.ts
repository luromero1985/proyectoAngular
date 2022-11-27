import { Component } from '@angular/core';

@Component({
  selector: 'app-pie-list',
  templateUrl: './pie-list.component.html',
  styleUrls: ['./pie-list.component.scss']
})
export class PieListComponent {
pie ={
  "name":"Lemon Pie",
  "description":"Base de galletitas de vainilla con manteca, crema de limón y merengue italiano.",
  "price": 600,
  "stock": 12,
  "image":"assets/images/lemonPie.jpg"
}
constructor(){}
ngOnInit(): void {

}
}

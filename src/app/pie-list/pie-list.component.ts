import { KeyValue } from '@angular/common';
import { Component } from '@angular/core';
import { PieCartService } from '../pie-cart.service';
import { PieDataService } from '../pie-data.service';
import { Pie } from './Pie'


@Component({
  selector: 'app-pie-list',
  templateUrl: './pie-list.component.html',
  styleUrls: ['./pie-list.component.scss']
})
export class PieListComponent {
  cackes: Pie[] = [];


  constructor(
    private cart: PieCartService,
    private pieDataService: PieDataService
  ) {
  }

  ngOnInit(): void {
    this.pieDataService.getAll()
    .subscribe(cackes => this.cackes=cackes); //mi arreglo se convierte en el que viene por el servicio
  }

  addToCart(pie: Pie): void {
    //agrego al cart
    this.cart.addToCart(pie);
    //le saco al stock la cantidad comparada
    pie.stock -= pie.quantity;
    //reinicio a cero para la siguiente compra
    pie.quantity = 0;
  }
  maxReached(m: String) {
    alert(m);
  }

}

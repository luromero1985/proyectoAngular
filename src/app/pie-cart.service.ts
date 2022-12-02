import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Pie } from './pie-list/Pie';

/* Maneja la logica del carrito*/
@Injectable({
  providedIn: 'root'
})
export class PieCartService {

  /*lista de productos que iran al carrito*/
  //convierto la variable observada en privada para poder reutilizar su nombre
 private _cartList: Pie[] = [];
 
  cartList: BehaviorSubject<Pie[]> = new BehaviorSubject<Pie[]>([]);

  constructor() { }

  addToCart(pie: Pie) {
    /*controlo que lo que me pase el usuario esté disponible (uso find para buscar)*/
    let item= this._cartList.find((v1) => v1.name == pie.name);
    if (!item) {
      /*agrego elementos al carrito*/
      this._cartList.push({... pie}); //los tres puntos hace que traiga todo lo que tiene adentro pie, clona el objeto
    } else{
      item.quantity += pie.quantity;
    }

    console.log(this._cartList);
    //doy aviso a que se actualice el cambio del BehaviorSubject, equivale al emitt de eventos
    this.cartList.next(this._cartList);
  }


}

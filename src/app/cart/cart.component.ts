import { Component, OnInit } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { PieCartService } from '../pie-cart.service';
import { Pie } from '../pie-list/Pie';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit{

  cartList$!: Observable<Pie[]>;
  
constructor(private cart: PieCartService){
 this.cartList$ = cart.cartList.asObservable();
}
  ngOnInit(): void {
  
  }
}

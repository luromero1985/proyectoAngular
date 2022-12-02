import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pie } from '../pie-list/Pie';

@Component({
  selector: 'app-input-integer',
  templateUrl: './input-integer.component.html',
  styleUrls: ['./input-integer.component.scss']
})
export class InputIntegerComponent implements OnInit {
  Constructor() { }

  @Input()
  quantity!: number;

  @Input()
  max!: number;

@Output()
quantityChange: EventEmitter<number>=new EventEmitter<number>();

@Output()
maxReached: EventEmitter<String>=new EventEmitter<String>();

  ngOnInit(): void {

  }

  upQuantity(): void {
    if (this.quantity < this.max) {
      this.quantity++;
      this.quantityChange.emit(this.quantity);
    }
    else{
      this.maxReached.emit("Cantidad maxima");
    }
    
  }

  downQuantity(): void {
    if (this.quantity > 0) {
      this.quantity--;
      this.quantityChange.emit(this.quantity);
    }
  }
  changeQuantity(event: { key: any; }): void {
    console.log(event.key);
    this.quantityChange.emit(this.quantity);
  }
}

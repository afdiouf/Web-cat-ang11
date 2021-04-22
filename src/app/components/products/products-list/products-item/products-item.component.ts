import { ActionEvent, ProductActionsTypes } from './../../../../state/product.state';
import { Product } from 'src/app/model/product.model';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-products-item',
  templateUrl: './products-item.component.html',
  styleUrls: ['./products-item.component.css']
})
export class ProductsItemComponent implements OnInit {

  @Input() product!: Product;
  @Output() eventEmitter: EventEmitter<ActionEvent> = new EventEmitter<ActionEvent>();

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(product: Product) {
    this.eventEmitter.emit({type: ProductActionsTypes.SELECT_PRODUCT, payload: product});
  }

  onDelete(product: Product) {
    this.eventEmitter.emit({type: ProductActionsTypes.DELETE_PRODUCT, payload: product});
  }

  onEdit(product: Product) {
    this.eventEmitter.emit({type: ProductActionsTypes.EDIT_PRODUCT, payload: product});
  }

}

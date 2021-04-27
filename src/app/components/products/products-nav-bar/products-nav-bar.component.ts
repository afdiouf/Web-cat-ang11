import { EventDriverService } from './../../../state/event.driver.service';
import { ProductActionsTypes, ActionEvent } from './../../../state/product.state';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-products-nav-bar',
  templateUrl: './products-nav-bar.component.html',
  styleUrls: ['./products-nav-bar.component.css']
})
export class ProductsNavBarComponent implements OnInit {

  //@Output() productEventEmitter: EventEmitter<ActionEvent> = new EventEmitter<ActionEvent>();

  constructor(private eventDriverService: EventDriverService) { }

  ngOnInit(): void {
  }

  onGetAllProducts(){
    this.eventDriverService.publishEvent({type: ProductActionsTypes.GET_ALL_PRODUCTS});
  }

  onGetSelectedProducts(){
    this.eventDriverService.publishEvent({type: ProductActionsTypes.GET_SELECTED_PRODUCTS});
  }

  onGetAvailableProducts(){
    this.eventDriverService.publishEvent({type: ProductActionsTypes.GET_AVAILABLE_PRODUCTS});
  }

  onNewProduct(){
    this.eventDriverService.publishEvent({type: ProductActionsTypes.NEW_PRODUCTS});
  }

  onSearch(dataForm: any){
    this.eventDriverService.publishEvent({
      type: ProductActionsTypes.SEARCH_PRODUCTS, 
      payload: dataForm
    });
  }

}

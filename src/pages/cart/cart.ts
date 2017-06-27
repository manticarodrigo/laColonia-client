import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { OrderProvider } from '../../providers/order/order';

@IonicPage({
  name: 'cart'
})
@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
})
export class CartPage {
  items: any;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private orderProvider: OrderProvider) {
    if (this.orderProvider.items.length > 0) {
      this.items = this.orderProvider.items;
    }
  }

  removeItem(item) {
    console.log("remove selected item pressed");
    item.selected = false;
    var index = this.orderProvider.items.indexOf(item);
    if (index > -1) {
      this.orderProvider.items.splice(index, 1);
    }
  }

}

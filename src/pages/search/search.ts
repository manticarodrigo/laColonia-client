import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { OrderProvider } from '../../providers/order/order';

@IonicPage({
  name: 'search'
})
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {
  items: any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private orderProvider: OrderProvider) {

    this.items = [];
    const item1 = {
      title: 'Pechuga entera cono congelada',
      price: 35.5,
      url: 'assets/pechuga.jpg',
      sku: 1,
      selected: false
    }
    this.items.push(item1);
    const item2 = {
      title: 'Zuquini',
      price: 15.9,
      url: 'assets/zuquini.jpg',
      sku: 2,
      selected: false
    }
    this.items.push(item2);
  }

  itemTapped(event, item) {
    console.log("item tapped");
    console.log(event);
    console.log(item);
  }

  addItem(item) {
    console.log("add selected item pressed");
    item.selected = true;
    this.orderProvider.items.push(item);
  }

  removeItem(item) {
    console.log("remove selected item pressed");
    item.selected = false;
    var index = this.orderProvider.items.indexOf(item);
    if (index > -1) {
      this.orderProvider.items.splice(index, 1);
    }
  }

  showCart() {
    console.log("show cart pressed");
    this.navCtrl.push('cart');
  }

}

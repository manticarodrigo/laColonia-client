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
  selectedItem: any;
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private orderProvider: OrderProvider) {

    // Let's populate this page with some filler content for funzies
    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];

    this.items = [];
    for (let i = 1; i < 11; i++) {
      this.items.push({
        title: 'Item ' + i,
        note: 'This is item #' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
  }

  itemTapped(event, item) {
    console.log("item tapped");
    console.log(event);
    console.log(item);
    this.selectedItem = item;
  }

  removeSelectedItem() {
    console.log("remove selected item pressed");
    this.selectedItem = null;
  }

  addSelectedItem() {
    console.log("add selected item pressed");
    if (this.selectedItem) {
      this.orderProvider.items.push(this.selectedItem);
      this.selectedItem = null;
    }
  }

}

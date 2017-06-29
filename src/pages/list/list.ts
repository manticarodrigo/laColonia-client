import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage({
  name: 'list'
})
@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {
  title: any;
  items: any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams) {
    this.title = this.navParams.get('title');
    this.items = this.navParams.get('items');
  }

}

import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

import { OrderProvider } from '../../providers/order/order';

@IonicPage({
  name: 'home'
})
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  offers = [];
  slides = [];
  constructor(public navCtrl: NavController,
              private orderProvider: OrderProvider) {
    const offer = {
      title: 'Pechuga entera cono congelada',
      price: 35.5,
      url: 'assets/pechuga.jpg',
      sku: 1,
      selected: false
    }
    const offer2 = {
      title: 'Zuquini',
      price: 15.9,
      url: 'assets/zuquini.jpg',
      sku: 2,
      selected: false
    }
    this.offers.push(offer);
    this.offers.push(offer2);

    const slide1 = {
      url: 'assets/slide1.jpg'
    }
    const slide2 = {
      url: 'assets/slide2.jpg'
    }
    const slide3 = {
      url: 'assets/slide3.jpg'
    }
    const slide4 = {
      url: 'assets/slide4.jpg'
    }
    this.slides.push(slide1);
    this.slides.push(slide2);
    this.slides.push(slide3);
    this.slides.push(slide4);
  }

  showCart() {
    console.log("show cart pressed");
    this.navCtrl.push('cart');
  }

  viewOffers() {
    console.log("view offers pressed");
    this.navCtrl.push('list', {
      title: 'El Ofertón',
      items: this.offers
    });
  }

}
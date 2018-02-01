import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { QuotePage } from '../quote/quote';

import QuoteData from '../../data/data';

@IonicPage()
@Component({
  selector: 'page-library',
  templateUrl: 'library.html',
})
export class LibraryPage {

  quotes :any[] = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.quotes = QuoteData;
  }

  goToQuotePage(quote){
    this.navCtrl.push(QuotePage, quote);
  }

  ionViewWillUnload() {
    this.navCtrl.popToRoot();
  }
}

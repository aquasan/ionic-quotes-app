import { FavouriteService } from './../../services/favourite.service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-quote',
  templateUrl: 'quote.html',
})
export class QuotePage {

  quotes :any[] = [];
  constructor(public navCtrl: NavController,
     public navParams: NavParams,
    private favouriteService: FavouriteService) {
  }

  ionViewDidLoad() {
    this.quotes = this.navParams.get('quotes');
  }

  favoriteQuote(quote){
    this.favouriteService.addQuote(quote);
  }
  unfavoriteQuote(quote){
    this.favouriteService.removeQuote(quote);
  }

  isQuoteFavorite(quote){
    return this.favouriteService.isQuoteFavorite(quote);
  }

}

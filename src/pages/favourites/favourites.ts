import { FavouriteService } from './../../services/favourite.service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-favourites',
  templateUrl: 'favourites.html',
})
export class FavouritesPage {

  quotes: any[]=[];
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private favouriteService: FavouriteService) {
  }
  ionViewWillEnter() {
    this.quotes = this.favouriteService.getQuotes();
  }

  ionViewDidLoad() {

  }

  removeQuote(quote){
    var position = this.quotes.findIndex((quoteEl) => {
      return quoteEl.id == quote.id
    });
    this.quotes.splice(position, 1);
    this.favouriteService.removeQuote(quote);
  }
}

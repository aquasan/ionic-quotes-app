import { LibraryPage } from './../library/library';
import { FavouritesPage } from './../favourites/favourites';
import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  favouritesRoot = FavouritesPage;
  libraryRoot = LibraryPage;


  constructor(public navCtrl: NavController) {}

}

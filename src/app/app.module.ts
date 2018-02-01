import { BlankPage } from './../pages/blank/blank';
import { FavouriteService } from './../services/favourite.service';
import { TabsPage } from './../pages/tabs/tabs';
import { LibraryPage } from './../pages/library/library';
import { QuotesPage } from './../pages/quotes/quotes';
import { SettingsPage } from './../pages/settings/settings';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { QuotePage } from '../pages/quote/quote';
import { FavouritesPage } from '../pages/favourites/favourites';

@NgModule({
  declarations: [
    MyApp,
    QuotePage,
    FavouritesPage,
    SettingsPage,
    QuotesPage,
    LibraryPage,
    TabsPage,
    BlankPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    QuotePage,
    FavouritesPage,
    SettingsPage,
    QuotesPage,
    LibraryPage,
    TabsPage,
    BlankPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    FavouriteService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

import { BlankPage } from './../pages/blank/blank';
import { TabsPage } from './../pages/tabs/tabs';
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ViewChild } from '@angular/core';
import { MenuController } from 'ionic-angular';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  tabsPage:any = TabsPage;
  @ViewChild('content') navCtrl;

  constructor(platform: Platform, statusBar: StatusBar, 
    splashScreen: SplashScreen,
    private menuCtrl: MenuController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  goToLibrary()
  {

    this.navCtrl.setRoot(TabsPage);
    this.menuCtrl.close();
  }

  goToBlankPage()
  {
    this.navCtrl.setRoot(BlankPage);
    this.menuCtrl.close();
  }
}


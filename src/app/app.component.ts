import { Component } from '@angular/core';
import * as firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {FIREBASE_CONFIG} from "./firebase.credentials";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
      this.platform.ready().then(() => {

          this.statusBar.styleDefault();
          this.splashScreen.hide(); // <-- hide static image
      });
      firebase.initializeApp(FIREBASE_CONFIG)
  }
}

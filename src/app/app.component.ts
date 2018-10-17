import { Component } from '@angular/core';
import * as firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

const config = {
    apiKey: "AIzaSyCA-NwbwTUgobRRrq5BvmnBXnP0wPYvqIQ",
    authDomain: "easytrain-1527172497956.firebaseapp.com",
    databaseURL: "https://easytraindb.firebaseio.com",
    projectId: "easytrain-1527172497956",
    storageBucket: "easytrain-1527172497956.appspot.com",
    messagingSenderId: "984968686708"
};

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
      this.splashScreen.hide();
    });
      firebase.initializeApp(config);
  }
}

import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { Facebook } from '@ionic-native/facebook';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase/app';
import { InAppBrowser } from '@ionic-native/in-app-browser';

//-pages
import { MyApp } from './app.component';
// import { HomePage } from '../pages/home/home';
// import { EditUserPage } from '../pages/edit-user/edit-user';
// import { ShowPage } from '../pages/show/show';
// import { MyServicesPage } from '../pages/my-services/my-services';
// import { PaymentsPage } from '../pages/payments/payments';
// import { PoliciesPage } from '../pages/policies/policies';

//-providers
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { Geolocation } from '@ionic-native/geolocation';
import { AgmCoreModule } from '@agm/core';
import { Camera } from '@ionic-native/camera';
import { NativeAudio } from '@ionic-native/native-audio';

//-service
import { BraintreeService } from '../services/braintree.service';
import { UserService } from '../services/user.service';
import { ProfessionalsService } from '../services/professionals.service';
import { ProfessionsService } from '../services/professions.service';
import { OfferService } from '../services/offer.service';
import { SaleService } from '../services/sale.service';
import { NotificacionService } from '../services/notificacion.service';


//- config 
// authDomain: "provedorappjobid.firebaseapp.com",
export const firebaseConfigDataBase = {
  apiKey: "AIzaSyBmrc2CjBbIJD_Pu_kkCcV8qNXJfsEBaxo",
  authDomain: "usuarioappjobid.firebaseapp.com",
  databaseURL: "https://usuarioappjobid.firebaseio.com",
  projectId: "usuarioappjobid",
  storageBucket: "usuarioappjobid.appspot.com",
  messagingSenderId: "679089691484"
};
export const firebaseConfigSecond = {
  apiKey: "AIzaSyDgDTYKXyykNHSqL48KOFiTiuHurW5IDko",
  authDomain: "provedorappjobid.firebaseapp.com",
  databaseURL: "https://provedorappjobid.firebaseio.com",
  projectId: "provedorappjobid",
  storageBucket: "provedorappjobid.appspot.com",
  messagingSenderId: "925192219494"
};

export const afDBUser = new AngularFireDatabase(firebase.initializeApp(firebaseConfigDataBase,'second'));

// export const googleMapsKey = 'AIzaSyB8zF6lhZegDjsV_mrqxd9Fb3YFTw2__AA';
// export const googleMapsKey = 'AIzaSyDdKCYx63FmAQzlRu0dnZMGVOZnFM65JWM';
export const googleMapsKey = 'AIzaSyCVVePnunpdeDdD9fUNbLwYALneSYy2NPg';

@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    BrowserModule, HttpModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfigSecond),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AgmCoreModule.forRoot({
      apiKey: googleMapsKey
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AngularFireModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    Geolocation,
    UserService,
    ProfessionalsService,
    ProfessionsService,
    OfferService,
    SaleService,
    BraintreeService,
    NotificacionService,
    Camera,
    NativeAudio,
    LocalNotifications,
    Facebook,
    InAppBrowser,
  ]
})
export class AppModule {}

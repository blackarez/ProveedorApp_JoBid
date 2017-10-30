import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

//-pages
import { MyApp } from './app.component';
// import { HomePage } from '../pages/home/home';
// import { EditUserPage } from '../pages/edit-user/edit-user';
import { ShowPage } from '../pages/show/show';
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

//-service
import { BraintreeService } from '../services/braintree.service';
import { UserService } from '../services/user.service';
import { ProfessionalsService } from '../services/professionals.service';
import { ProfessionsService } from '../services/professions.service';
import { OfferService } from '../services/offer.service';
import { SaleService } from '../services/sale.service';

//- config 
export const firebaseConfig = {
  apiKey: "AIzaSyBmrc2CjBbIJD_Pu_kkCcV8qNXJfsEBaxo",
  authDomain: "usuarioappjobid.firebaseapp.com",
  databaseURL: "https://usuarioappjobid.firebaseio.com",
  projectId: "usuarioappjobid",
  storageBucket: "usuarioappjobid.appspot.com",
  messagingSenderId: "679089691484"
};

// export const googleMapsKey = 'AIzaSyB8zF6lhZegDjsV_mrqxd9Fb3YFTw2__AA';
export const googleMapsKey = 'AIzaSyCVVePnunpdeDdD9fUNbLwYALneSYy2NPg';

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule, HttpModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
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
  ]
})
export class AppModule {}

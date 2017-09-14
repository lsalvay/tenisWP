import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AlumnoDetallePage } from '../pages/alumno-detalle/alumno-detalle';
import { AlumnosService } from '../services/alumnos.service'

export const firebaseConfig = {
  apiKey: "AIzaSyAuV0EzNr5q8iSnTGgMOi7Uo_K6xw1kiVs",
  authDomain: "teniswp.firebaseapp.com",
  databaseURL: "https://teniswp.firebaseio.com",
  storageBucket: "teniswp.appspot.com",
  messagingSenderId: "48394419115"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AlumnoDetallePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AlumnoDetallePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AlumnosService
  ]
})
export class AppModule {}

import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { LaColonia } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { IonicStorageModule } from '@ionic/storage';
import { HttpModule } from '@angular/http';
import { OrderProvider } from '../providers/order/order';

@NgModule({
  declarations: [
    LaColonia
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(LaColonia, {
      mode: 'md',
      activator: 'none',
      preloadModules: true
    }),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    LaColonia
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    OrderProvider
  ]
})
export class AppModule {}

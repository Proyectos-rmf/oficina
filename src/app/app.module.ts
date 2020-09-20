import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './components/app/app-routing.module';
import { AppComponent } from './components/app/app.component';
import { CoreModule } from './components/core/core.module';
import { environment } from 'src/environments/environment';

/* Importar FireBase */
import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule, BUCKET } from '@angular/fire/storage';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule
  ],
  providers: [ { provide: BUCKET, useValue: 'gs://ofpempresas.appspot.com' } ],
  bootstrap: [AppComponent]
})
export class AppModule { }

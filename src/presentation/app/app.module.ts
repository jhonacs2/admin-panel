import {isDevMode, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './routes/app-routing.module';
import {AppComponent} from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {StoreModule} from '@ngrx/store';
import {AuthModule} from '../../data/repositories/Auth/auth.module';
import {ROOT_REDUCERS} from './state/app.state';
import {EffectsModule} from '@ngrx/effects';
import {EffectsArray} from './state/effects';
import {UserModule} from '../../data/repositories/user/user.module';
import {TokenInterceptorService} from './interceptor/token-interceptor.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AuthModule,
    UserModule,
    StoreModule.forRoot(ROOT_REDUCERS),
    EffectsModule.forRoot(EffectsArray),
    StoreDevtoolsModule.instrument({
      maxAge: 50,
      name: 'TEST',
      logOnly: !isDevMode()
    })
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule {
}

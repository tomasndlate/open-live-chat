import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutes } from './app.routes';
import { TopWarningLinkModule } from './components/top-warning-link/top-warning-link.module';
import { NavbarModule } from './components/navbar/navbar.module';

const config: SocketIoConfig = { url: 'http://localhost:3000', options: {} };

@NgModule({
    declarations: [
        AppComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
      RouterModule.forRoot(AppRoutes),
      SocketIoModule.forRoot(config),
      HttpClientModule,
      BrowserModule,
      TopWarningLinkModule,
      NavbarModule
    ]
})
export class AppModule { }

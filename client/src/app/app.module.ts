import { NgModule } from '@angular/core';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutes } from './app.routes';
import { TopWarningLinkModule } from './components/top-warning-link/top-warning-link.module';
import { NavbarModule } from './layout/navbar/navbar.module';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { ClipboardModule } from 'ngx-clipboard';

const config: SocketIoConfig = { url: 'http://192.168.1.8:3000', options: {} };

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
      ClipboardModule,
      TopWarningLinkModule,
      NavbarModule,
    ]
})
export class AppModule { }

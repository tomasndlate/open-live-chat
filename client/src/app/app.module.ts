import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

import { AppComponent } from './app.component';
import { ChatModule } from "./pages/chat/chat.module";
import { HttpClientModule } from '@angular/common/http';

const config: SocketIoConfig = { url: 'http://192.168.1.8:3000', options: {} };

@NgModule({
    declarations: [
        AppComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
      SocketIoModule.forRoot(config),
      HttpClientModule,
      BrowserModule,
      ChatModule
    ]
})
export class AppModule { }

import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';
import { Message } from 'src/app/models/message';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  constructor(private socket: Socket) {
  }

  // Socket Messages
  sendMessage(message: Message){
    this.socket.emit('send-message', message)
  }

  getNewMessages(): Observable<Message> {
    return this.socket.fromEvent('new-message');
  }

  onMessage(): Observable<Message> {
    return this.socket.fromEvent('new-message');
  }
}
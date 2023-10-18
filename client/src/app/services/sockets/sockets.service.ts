import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';
import { Message } from 'src/app/models/message';

@Injectable({
  providedIn: 'root'
})
export class SocketsService {
  constructor(private socket: Socket) {
  }

  sendMessage(message: {sender: string, content: string}){
    this.socket.emit('send-message', message)
  }

  getNewMessages(): Observable<Message> {
    return this.socket.fromEvent('new-message');
  }
}

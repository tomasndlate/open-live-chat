import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Message } from 'src/app/models/Message';
import { SocketService } from '../socket/socket.service';

import { getToken } from '../../utils/tokenUtils';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  private apiUrl = 'http://192.168.1.8:3000/messages/get-all-messages';

  messages: Message[] = [];

  constructor(private httpClient: HttpClient, private socketService: SocketService) { }

  getMessages(): Observable<Message[]> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'ResponseType': 'json',
        'Authorization': `Bearer ${getToken()}`,
      }),
    };

    return this.httpClient.get<Message[]>(this.apiUrl, httpOptions)
  }

  sendMessage(message: Message) {
    this.socketService.sendMessage(message);
  }
}

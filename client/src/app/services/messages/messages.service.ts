import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Message } from 'src/app/models/message';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  private apiUrl = 'http://192.168.1.8:3000/messages/get-all-messages';

  messages: Message[] = [];

  constructor(private httpClient: HttpClient) { }

  getMessages(): Observable<Message[]> {
    return this.httpClient.get<Message[]>(this.apiUrl, {responseType: 'json'})
  }
}

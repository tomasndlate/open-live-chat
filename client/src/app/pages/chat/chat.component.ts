import { Component } from '@angular/core';
import { Message } from 'src/app/models/message';
import { MessagesService } from 'src/app/services/messages/messages.service';
import { SocketsService } from 'src/app/services/sockets/sockets.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent {

  messages: Message[] = [];
  message: string = "";
  user: string = "teste";

  constructor(
    private socketsService: SocketsService,
    private messagesService: MessagesService
  ) {}

  ngOnInit(){
    this.messagesService.getMessages().subscribe( (response) => {
      this.messages = response;
      console.log(this.messages)
      console.log(this.messages[0])
    })
    this.getNewMessages()
  }

  sendMessage(){
    const msg = {
      sender: this.user,
      content: this.message
    }
    this.socketsService.sendMessage(msg)
  }
  getNewMessages(){
    this.socketsService.getNewMessages().subscribe((msg) => {
      this.messages.push(msg)
      // data.content
    })
  }
}

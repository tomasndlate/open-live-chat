import { Component } from '@angular/core';
import { Message } from 'src/app/models/Message';
import { MessagesService } from 'src/app/services/messages/messages.service';
import { SocketService } from 'src/app/services/socket/socket.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent {

  messages: Message[] = [];
  message: string = "";
  username: string = "";

  constructor(
    private socketService: SocketService,
    private messagesService: MessagesService
  ) {}

  ngOnInit(){
    this.messagesService.getMessages().subscribe( (response) => {
      this.messages = response;
    })
    this.getNewMessages()
    // this.scrollToBottom();
  }

  sendMessage(){
    const msg = {
      sender: this.username,
      content: this.message
    }
    this.socketService.sendMessage(msg)
    this.message = ""
  }
  getNewMessages(){
    this.socketService.getNewMessages().subscribe((msg) => {
      this.messages.push(msg)
      // data.content
    })
  }

}

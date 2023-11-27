import { Component } from '@angular/core';
import { Message } from 'src/app/models/Message';
import { User } from 'src/app/models/User';
import { MessagesService } from 'src/app/services/messages/messages.service';
import { SocketService } from 'src/app/services/socket/socket.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-chat-element',
  templateUrl: './chat-element.component.html',
  styleUrls: ['./chat-element.component.scss']
})
export class ChatElementComponent {
  
  messages: Message[] = [];
  message: string = "";
  user: User = {username: ""};

  constructor(
    private userService: UserService,
    private socketService: SocketService,
    private messagesService: MessagesService
  ) {}

  ngOnInit(){
    this.get_user();
    this.get_MessagesHistory();
    this.subscribe_ReceiveNewMessages();
  }

  get_user(){
    this.userService.userObservable.subscribe((user) => {
      this.user = user;
    })
  }

  get_MessagesHistory(){
    this.messagesService.getMessages().subscribe( (response) => {
      this.messages = response;
    })
  }

  subscribe_ReceiveNewMessages(){
    this.socketService.getNewMessages().subscribe((msg) => {
      this.messages.unshift(msg);
    })
  }

  send_Message(): void{
    const msg = {
      sender: this.user.username,
      content: this.message
    }
    this.socketService.sendMessage(msg);
    this.message = "";
  }
}

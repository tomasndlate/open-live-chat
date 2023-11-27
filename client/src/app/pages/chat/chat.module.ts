import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './chat.component';
import { ChatRoutes } from './chat.routes';
import { ChatElementComponent } from './chat-element/chat-element.component';
import { MembersElementComponent } from './members-element/members-element.component';
import { SendersPositionElementComponent } from './senders-position-element/senders-position-element.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ProfileElementComponent } from './profile-element/profile-element.component';



@NgModule({
  declarations: [ 
    ChatComponent, 
    ChatElementComponent, 
    MembersElementComponent, 
    SendersPositionElementComponent,
    ProfileElementComponent 
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(ChatRoutes)
  ],
  exports: [ ChatComponent ]
})
export class ChatModule { }

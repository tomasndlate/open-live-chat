import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './chat.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ChatRoutes } from './chat.routes';



@NgModule({
  declarations: [ ChatComponent ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(ChatRoutes)
  ],
  exports: [ ChatComponent ]
})
export class ChatModule { }

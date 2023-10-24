import { Routes } from "@angular/router";
import { ChatComponent } from "./pages/chat/chat.component";

export const AppRoutes: Routes = [
  {
    path: '',
    // Make sure to NOT import the Chat Module in the App Module - router url issue
    redirectTo: '/chat',
    pathMatch: 'full'
  },
  {
    path: 'chat',
    loadChildren: () => import('./pages/chat/chat.module').then(module => module.ChatModule)
  },
  {
    path: '**',
    redirectTo: 'chat'
  },
]

import { Routes } from "@angular/router";

export const AppRoutes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: 'chat',
    loadChildren: () => import('./pages/chat/chat.module').then(module => module.ChatModule)
  }
]

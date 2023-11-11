import { Routes } from "@angular/router";
import { AuthGuard } from "./guards/auth.guard";
import { UnauthGuard } from "./guards/unauth.guard";

export const AppRoutes: Routes = [
  {
    path: '',
    // Make sure to NOT import the Chat Module in the App Module - router url issue
    redirectTo: '/chat',
    pathMatch: 'full'
  },
  {
    path: 'signin',
    loadChildren: () => import('./pages/sign-in/sign-in.module').then(module => module.SignInModule),
    canActivate: [UnauthGuard]
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/sign-up/sign-up.module').then(module => module.SignUpModule),
    canActivate: [UnauthGuard]
  },
  {
    path: 'chat',
    loadChildren: () => import('./pages/chat/chat.module').then(module => module.ChatModule),
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    redirectTo: 'chat'
  },
]

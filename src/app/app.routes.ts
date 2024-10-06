import { Routes } from '@angular/router';
import { DashboardComponent } from './theme/layourt/dashboard/dashboard.component';
import { AuthComponent } from './theme/layourt/auth/auth.component';
import { HomeComponent } from './theme/layourt/home/home.component';

export const routes: Routes = [
    {
      path: 'auth',
      component: AuthComponent,
      children: [
        {
          path: '',
          loadChildren: () => import('../app/core/routes/authRoute/auth.module').then((m) => m.AuthModule)
        }
      ]
    },
    {
      path: 'home',
      component: HomeComponent,
      children: [
        {
          path: '',
          loadChildren: () => import('../app/core/routes/homeRoute/home.module').then((m) => m.HomeModule)
        }
      ]
    },
    {
      path: 'default',
      component: DashboardComponent,
      children: [
        {
          path: '',
          loadChildren: () => import('../app/core/routes/dashboardRoute/dashboard-route.module').then((m) => m.DashboardRouteModule)
        }
      ]
    },
    // { path: 'profile', component: ProfileComponent },
    // { path: 'settings', component: SettingsComponent, 
    //   children: [
    //     { path: 'general', component: GeneralSettingsComponent },
    //     { path: 'security', component: SecuritySettingsComponent }
    //   ] 
    // },
    // { path: 'messages', component: MessagesComponent },
    // { path: 'help', component: HelpComponent },
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' } // Redirection par défaut
  ];
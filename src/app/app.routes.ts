import { Routes } from '@angular/router';
import { DashboardComponent } from './theme/layourt/dashboard/dashboard.component';

export const routes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
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
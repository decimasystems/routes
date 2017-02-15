import { Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';
import { ProtectedComponent } from '../protected/protected.component';
import { LoggedInGuard } from '../guards/logged-in.guard';
import { routes as childRoutes } from './children-routes';


export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent, children: childRoutes },
  { path: 'protected', component: ProtectedComponent, canActivate: [LoggedInGuard] }];
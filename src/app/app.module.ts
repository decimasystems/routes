import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { routes } from './routes/routes';
import { routes as childRoutes } from './routes/children-routes'; ///<<<<<<<<<<<<ROUTES
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';     ////////<<<<<<<<COMPONENTS
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProtectedComponent } from './protected/protected.component';

import { AUTH_PROVIDERS } from './services/auth-service';
import { LoggedInGuard } from './guards/logged-in.guard';
import { ByIdComponent } from './by-id/by-id.component';
import { MariusComponent } from './marius/marius.component';
import { SomeoneComponent } from './someone/someone.component';
import { MainComponent } from './main/main.component';



@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    LoginComponent,
    ProtectedComponent,
    ByIdComponent,
    MariusComponent,
    SomeoneComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AUTH_PROVIDERS,
    LoggedInGuard,
    { provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }

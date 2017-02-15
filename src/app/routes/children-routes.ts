import { Routes } from '@angular/router';
import { AboutComponent } from '../about/about.component';
import {ByIdComponent } from '../by-id/by-id.component';
import { SomeoneComponent } from '../someone/someone.component';
import { MariusComponent } from '../marius/marius.component';
import { MainComponent } from '../main/main.component';
export const routes: Routes = [
    {path: '', redirectTo: 'main', pathMatch:'full'},
    {path: 'main', component: MainComponent},
    {path: 'marius', component: MariusComponent},
    {path: 'someone', component: SomeoneComponent},

];
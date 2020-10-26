import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { AuthGuard } from '@auth0/auth0-angular'; ng g guard services/AuthGuard
// al generear guard no escribir guard para evitar repetir la palabra guard
import { HomeComponent } from './components/home/home.component';
import { ProtegidaComponent } from './components/protegida/protegida.component';
import { AuthGuardGuard } from './services/auth-guard.guard';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'protegida',
    component: ProtegidaComponent,
    canActivate: [AuthGuardGuard]
  },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

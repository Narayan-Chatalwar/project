import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardGuard } from './helpers/auth-guard.guard';
import { LogedInGuard } from './helpers/loged-in.guard';
import { LoginComponent } from './login/login.component';
import { MainLayoutComponent } from './main-layout/main-layout/main-layout.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path:'', pathMatch:'full', redirectTo:'login'},
  { path:'login', component: LoginComponent,canActivate: [LogedInGuard]},
  { path:'signup', component: SignupComponent,canActivate: [LogedInGuard]},
  {
    path: 'admin',
    redirectTo: 'admin/componenta',
    pathMatch: 'full'
  },
  {
    path: 'admin',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./main-layout/main-layout.module').then(m => m.MainLayoutModule)
      }
    ],
    canActivate:[AuthGuardGuard]
  },
  {path:'**',redirectTo:'404error'},
  {path:'404error',component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

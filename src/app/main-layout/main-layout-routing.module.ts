import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentaComponent } from '../componenta/componenta.component';
import { ComponentbComponent } from '../componentb/componentb.component';
import { ComponentcComponent } from '../componentc/componentc.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { AuthGuardGuard } from '../helpers/auth-guard.guard';
import { ProfileComponent } from '../profile/profile.component';

const routes: Routes = [
  { path:'dashboard', component: DashboardComponent},
  { path:'componenta', component: ComponentaComponent},
  { path:'componentb', component: ComponentbComponent},
  { path:'componentc', component: ComponentcComponent},
  {path:'profile',component: ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainLayoutRoutingModule { }

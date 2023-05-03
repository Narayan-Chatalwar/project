import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainLayoutRoutingModule } from './main-layout-routing.module';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { ComponentaComponent } from '../componenta/componenta.component';
import { ComponentbComponent } from '../componentb/componentb.component';
import { ComponentcComponent } from '../componentc/componentc.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MainLayoutComponent,
    DashboardComponent,
    SidebarComponent,
    NavbarComponent,
    ComponentaComponent,
    ComponentbComponent,
    ComponentcComponent,
  ],
  imports: [
    CommonModule,
    MainLayoutRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class MainLayoutModule { }

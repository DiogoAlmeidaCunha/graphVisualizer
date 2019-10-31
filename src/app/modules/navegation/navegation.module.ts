import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavegationRoutingModule } from './navegation-routing.module';
import { NavComponent } from './components/nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { DragdropComponent } from './components/dragdrop/dragdrop.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import {MatSliderModule} from '@angular/material/slider';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatTreeModule} from '@angular/material/tree';
import {MatTableModule} from '@angular/material/table';
import { GraphComponent } from './components/graph/graph.component';
import { Chartd3Component } from './components/graph/chartd3/chartd3.component';
import { Graphd3Component } from './components/graph/graphd3/graphd3.component';
  
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    NavComponent, 
    DashboardComponent, 
    DragdropComponent, 
    GraphComponent,
    Chartd3Component,
    Graphd3Component
  ],
  
  imports: [
    CommonModule,
    NavegationRoutingModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    DragDropModule,
    MatSliderModule,
    MatProgressBarModule,
    MatSlideToggleModule,
    MatTreeModule,
    MatTableModule,
    HttpClientModule
  ]
})
export class NavegationModule { }

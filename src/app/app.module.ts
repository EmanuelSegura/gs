import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeHeaderComponent } from './home-header/home-header.component';
import { ObraComponent } from './obra/obra.component';
import { PrensaComponent } from './prensa/prensa.component';
import { AboutComponent } from './about/about.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ObraChild1Component } from './obra-child1/obra-child1.component';
import { ObraChild2Component } from './obra-child2/obra-child2.component';
import { ObraChild3Component } from './obra-child3/obra-child3.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeHeaderComponent,
    ObraComponent,
    PrensaComponent,
    AboutComponent,
    ContactoComponent,
    ObraChild1Component,
    ObraChild2Component,
    ObraChild3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

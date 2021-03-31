import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactoComponent } from './contacto/contacto.component';
import { HomeHeaderComponent } from './home-header/home-header.component';
import { ObraChild1Component } from './obra-child1/obra-child1.component';
import { ObraChild2Component } from './obra-child2/obra-child2.component';
import { ObraChild3Component } from './obra-child3/obra-child3.component';
import { ObraComponent } from './obra/obra.component';
import { PrensaComponent } from './prensa/prensa.component';

const routes: Routes = [
  {path: '',redirectTo: 'home', pathMatch:'full'},
  {path: 'home', component: HomeHeaderComponent},
  {path: 'obra', component: ObraComponent},
  {path: 'prensa', component: PrensaComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contacto', component: ContactoComponent},
  // Obras
  {path: 'obra/espertise', component: ObraChild1Component},
  {path: 'obra/paisajes', component: ObraChild2Component},
  {path: 'obra/acuarelas', component: ObraChild3Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


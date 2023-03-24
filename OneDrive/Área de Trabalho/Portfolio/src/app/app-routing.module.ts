import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MEComponent } from './views/me/me.component';
import { ProjectsComponent } from './views/projects/projects.component';
import { AbilityComponent } from './views/ability/ability.component';
import { ContactComponent } from './views/contact/contact.component'

const routes: Routes = [{
  path: "",
  component: MEComponent
},{
  path: "me",
  component: MEComponent
},{
  path:"projetos",
  component:ProjectsComponent
},{
  path:"ability",
  component:AbilityComponent
},{
  path:"contact",
  component:ContactComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

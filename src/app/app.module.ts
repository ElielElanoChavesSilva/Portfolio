import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './template/header/header.component';

import { MEComponent } from './views/me/me.component';
import { ProjectsComponent } from './views/projects/projects.component';
import { AbilityComponent } from './views/ability/ability.component';
import { ContactComponent } from './views/contact/contact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { MatSidenavModule} from '@angular/material/sidenav';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MEComponent,
    ProjectsComponent,
    AbilityComponent,
    ContactComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    BrowserModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

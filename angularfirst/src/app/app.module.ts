import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import {
  BsDatepickerModule,
  BsDatepickerConfig,
} from 'ngx-bootstrap/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListCharactersComponent } from './characters/list-characters.component';
import { CreateCharacterComponent } from './characters/create-character.component';

const appRoutes: Routes = [
  { path: 'list', component: ListCharactersComponent },
  { path: 'create', component: CreateCharacterComponent },
  { path: '', redirectTo: '/list', pathMatch: 'full' }
];
@NgModule({
  declarations: [
    AppComponent,
    ListCharactersComponent,
    CreateCharacterComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
  ],
  providers: [BsDatepickerConfig],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

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
    CreateCharacterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';

import { ApiService } from './api.service';

import { FilterPipe } from './filter.pipe';
import { TypePipe } from './type.pipe';
import { LanguagePipe } from './language.pipe';


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: ':userId', component: ProfileComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    FilterPipe,
    TypePipe,
    LanguagePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})

export class AppModule { }



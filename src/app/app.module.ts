import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovielistComponent } from './components/movielist/movielist.component';
import { HttpClientModule } from '@angular/common/http';
import {MovieserviceService} from './services/movieservice.service';
import { UserbarComponent } from './components/userbar/userbar.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {UserhttpService} from './services/userhttp.service';
import { EditmovieComponent } from './components/editmovie/editmovie.component';
import {StorageserviceService} from './services/storageservice.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AddmovieComponent } from './components/addmovie/addmovie.component';
import { MoviereviewsComponent } from './components/moviereviews/moviereviews.component';

@NgModule({
  declarations: [
    AppComponent,
    MovielistComponent,
    UserbarComponent,
    EditmovieComponent,
    AddmovieComponent,
    MoviereviewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [MovieserviceService, UserhttpService, StorageserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

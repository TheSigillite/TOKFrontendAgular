import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovielistComponent } from './components/movielist/movielist.component';
import { HttpClientModule } from '@angular/common/http';
import {MovieserviceService} from './services/movieservice.service';
import { UserbarComponent } from './components/userbar/userbar.component';
import {FormsModule} from '@angular/forms';
import {UserhttpService} from './services/userhttp.service';

@NgModule({
  declarations: [
    AppComponent,
    MovielistComponent,
    UserbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [MovieserviceService, UserhttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }

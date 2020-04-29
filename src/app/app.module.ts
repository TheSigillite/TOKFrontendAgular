import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovielistComponent } from './components/movielist/movielist.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MovieserviceService} from './services/movieservice.service';
import { UserbarComponent } from './components/userbar/userbar.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {UserhttpService} from './services/userhttp.service';
import { EditmovieComponent } from './components/editmovie/editmovie.component';
import {StorageserviceService} from './services/storageservice.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AddmovieComponent } from './components/addmovie/addmovie.component';
import { MoviereviewsComponent } from './components/moviereviews/moviereviews.component';
import {ReviewserviceService} from './services/reviewservice.service';
import { RegisteruserComponent } from './components/registeruser/registeruser.component';
import { MakemodComponent } from './components/makemod/makemod.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    MovielistComponent,
    UserbarComponent,
    EditmovieComponent,
    AddmovieComponent,
    MoviereviewsComponent,
    RegisteruserComponent,
    MakemodComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule
  ],
  providers: [MovieserviceService, UserhttpService, StorageserviceService, ReviewserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

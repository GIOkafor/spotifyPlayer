import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

//services
import { SearchService } from './services/search.service';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { ArtistComponent } from './artist/artist.component';

const appRoutes: Routes = [
	{path: 'home', component: SearchComponent},
	{path: 'artist/:id', component: ArtistComponent},
	{path: '', redirectTo: '/home', pathMatch: 'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ArtistComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [
  	SearchService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

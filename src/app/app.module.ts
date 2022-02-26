import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { SquareComponent } from './Components/square/square.component';
import { TitleComponent } from './Components/title/title.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { HomeComponent } from './Pages/home/home.component';
import { AppRoutes } from './Interfaces/AppRoutes';
import { FavoritesComponent } from './Pages/favorites/favorites.component';
import { AdminComponent } from './Pages/admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    SquareComponent,
    TitleComponent,
    NavbarComponent,
    HomeComponent,
    FavoritesComponent,
    AdminComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(AppRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

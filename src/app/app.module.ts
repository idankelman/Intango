//------------------------------------------------------------------------------
//                          Module Definition
//------------------------------------------------------------------------------

import { NgModule } from '@angular/core';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

// import {CommonModule} from '@angular/common';

//------------------------------------------------------------------------------
//                          Components
//------------------------------------------------------------------------------

import { AppComponent } from './app.component';
import { SquareComponent } from './Components/square/square.component';
import { TitleComponent } from './Components/title/title.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { HomeComponent } from './Pages/home/home.component';
import { AppRoutes } from './Interfaces/AppRoutes';
import { FavoritesComponent } from './Pages/favorites/favorites.component';
import { AdminComponent } from './Pages/admin/admin.component';
import { CommonModule } from '@angular/common';
import { FormNewComponent } from './Components/form-new/form-new.component';

//--------------------------------------------------------------------------------
//Services
//--------------------------------------------------------------------------------

import { ValidNewFormService } from './Services/valid-new-form.service';
import { ReactiveFormComponent } from './Components/reactive-form/reactive-form.component';
import { CollapserComponent } from './Components/collapser/collapser.component';
import { CustomPipePipe } from './Pipes/custom-pipe.pipe';
import { ModalComponent } from './Components/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    SquareComponent,
    TitleComponent,
    NavbarComponent,
    HomeComponent,
    FavoritesComponent,
    AdminComponent,
    FormNewComponent,
    ReactiveFormComponent,
    CollapserComponent,
    CustomPipePipe,
    ModalComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forRoot(AppRoutes),
  ],
  providers: [
    ValidNewFormService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

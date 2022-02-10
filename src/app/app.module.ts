import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SquareComponent } from './Components/square/square.component';
import { TitleComponent } from './Components/title/title.component';

@NgModule({
  declarations: [
    AppComponent,
    SquareComponent,
    TitleComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

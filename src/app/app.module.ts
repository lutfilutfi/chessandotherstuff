import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LutfiComponent } from './lutfi/lutfi.component';
import { CaliphComponent } from './caliph/caliph.component';
import { HaseenaComponent } from './haseena/haseena.component';
import { DukmanComponent } from './dukman/dukman.component';
import { FormsModule } from '@angular/forms';
import { ChessComponent } from './chess/chess.component';

@NgModule({
  declarations: [
    AppComponent,
    LutfiComponent,
    CaliphComponent,
    HaseenaComponent,
    DukmanComponent,
    ChessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

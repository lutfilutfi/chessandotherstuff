import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CaliphComponent } from './caliph/caliph.component';
import { ChessComponent } from './chess/chess.component';
import { DukmanComponent } from './dukman/dukman.component';
import { HaseenaComponent } from './haseena/haseena.component';
import { LutfiComponent } from './lutfi/lutfi.component';

const routes: Routes = [
  {
    path:'lutfi',
    component:LutfiComponent
  },
  {
    path:'caliph',
    component:CaliphComponent
  },
  {
    path:'haseena',
    component:HaseenaComponent
  },
  {
    path:'dukman',
    component:DukmanComponent
  },
  {
    path:'chess',
    component:ChessComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

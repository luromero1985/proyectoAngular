import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PieListComponent } from './pie-list/pie-list.component';

import{FormsModule} from '@angular/forms';
import { CartComponent } from './cart/cart.component';
import { CositasdulcesAboutComponent } from './cositasdulces-about/cositasdulces-about.component';
import { CositasdulcesCackesComponent } from './cositasdulces-cackes/cositasdulces-cackes.component';

@NgModule({
  declarations: [
    AppComponent,
    PieListComponent,
    CartComponent,
    CositasdulcesAboutComponent,
    CositasdulcesCackesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

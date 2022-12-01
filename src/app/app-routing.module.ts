import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CositasdulcesAboutComponent } from './cositasdulces-about/cositasdulces-about.component';
import { CositasdulcesCackesComponent } from './cositasdulces-cackes/cositasdulces-cackes.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'cackes',
    pathMatch: 'full',
  },
   {
    path: 'cackes',
    component: CositasdulcesCackesComponent,
  },
  {
    path: 'about',
    component: CositasdulcesAboutComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

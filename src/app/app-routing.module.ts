import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: 'component',
    loadChildren: () =>
      import('./sample-proj/component-1/component-1.module').then(
        (m) => m.Component1Module
      ),
  },
  {
    path: 'component-2',
    loadChildren: () =>
      import('./sample-proj/component-2/component-2.module').then(
        (m) => m.Component2Module
      ),
  },
  {
    path: '',
    redirectTo: 'component',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}

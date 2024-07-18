import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { Component1Component } from './component-1.component';
import { MemoryComponent } from './memory/memory.component';

const routes: Routes = [
  {
    path: '',
    component: Component1Component,
    children: [
      {
        path: 'blog',
        component: BlogComponent,
      },
      {
        path: 'memory',
        component: MemoryComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Component1RoutingModule {}

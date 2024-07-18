import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog/blog.component';
import { Component1RoutingModule } from './component-1-routing.module';
import { Component1Component } from './component-1.component';
import { BlogItemComponent } from './blog/blog-item/blog-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { MemoryComponent } from './memory/memory.component';
import { MemoryItemComponent } from './memory/memory-item/memory-item.component';



@NgModule({
  declarations: [
    BlogComponent,
    Component1Component,
    BlogItemComponent,
    MemoryComponent,
    MemoryItemComponent
  ],
  imports: [
    CommonModule,
    Component1RoutingModule,
    FontAwesomeModule,
    FormsModule,
    SharedModule
  ],
})
export class Component1Module { }

import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { Component2RoutingModule } from './component-2-routing.module';
import { SignUpComponent } from './sign-up/sign-up.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SkillsFormComponent } from './sign-up/skills-form/skills-form.component';


@NgModule({
  declarations: [
    SignUpComponent,
    SkillsFormComponent,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    Component2RoutingModule,
    FormsModule, 
    ReactiveFormsModule
  ]
})
export class Component2Module { }

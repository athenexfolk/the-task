import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';

import { TaskRoutingModule } from './task-routing.module';
import { AddTaskComponent } from './components/add-task/add-task.component';
import {ReactiveFormsModule} from "@angular/forms";
import { TaskPageComponent } from './page/task-page/task-page.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AddTaskComponent,
    TaskPageComponent,
    HeaderComponent
  ],
    imports: [
        CommonModule,
        TaskRoutingModule,
        ReactiveFormsModule,
        NgOptimizedImage
    ]
})
export class TaskModule { }

import {Component, EventEmitter, Output} from '@angular/core';
import {FormBuilder, FormControl} from "@angular/forms";
import Task from 'src/app/core/model/task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent {

  @Output() addedTask = new EventEmitter<Task>()
  constructor(private fb: FormBuilder) {}

  form = this.fb.group({
    taskName: new FormControl(''),
    taskDescription: new FormControl(''),
    taskPriority: new FormControl('')
  })
  addTask(){
    let value = this.form.value
    let data: Task = {
      name: '',
      description: '',
      priority: ''
    }

    data.name = (value.taskName) ? value.taskName : "EMPTY TASK NAME"
    data.description = (value.taskDescription) ? value.taskDescription : "No description"
    data.priority = (value.taskPriority) ? value.taskPriority : "Not set"
    this.addedTask.emit(data)
  }
}

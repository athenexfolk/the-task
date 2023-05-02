import {Component, OnInit} from '@angular/core';
import Task from "src/app/core/model/task";
import {LocalStorageManagementService} from "src/app/core/services/local-storage-management.service";

@Component({
  selector: 'app-task-page',
  templateUrl: './task-page.component.html',
  styleUrls: ['./task-page.component.scss']
})
export class TaskPageComponent implements OnInit {

  taskList: Task[] = []
  wantToAdd: boolean = false

  constructor(private LCService: LocalStorageManagementService) {
  }

  toggleAdd(){
    this.wantToAdd = !this.wantToAdd;
  }

  addTaskToList(newTask: Task){
    this.taskList.push(newTask)
    this.LCService.addToLC(JSON.stringify(this.taskList))
  }

  removeTask(index: number) {
    this.taskList.splice(index, 1)
    this.LCService.addToLC(JSON.stringify(this.taskList))
  }
  ngOnInit() {
    if(this.LCService.getItemFromLC()){
      this.taskList = JSON.parse(this.LCService.getItemFromLC())
    }
  }
}


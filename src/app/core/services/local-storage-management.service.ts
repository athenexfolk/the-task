import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageManagementService {

  constructor() { }

  key = "the-task-item"

  getItemFromLC(): string {
    let data = ""
    if(localStorage.getItem(this.key)){
      data = localStorage.getItem(this.key)!
    }
    return data
  }
  addToLC(data: string){
    localStorage.setItem(this.key,data)
  }

  removeFromLC(){
    localStorage.removeItem(this.key)
  }

  clearLC(){
    localStorage.clear()
  }
}

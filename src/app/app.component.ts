import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ToDo-App';
  id: number = 7;
  listItems = [
    { id: 1, task: 'Complete the course 1', status: true },
    { id: 2, task: 'Complete the course 2', status: false },
    { id: 3, task: 'Complete the course 3', status: true },
    { id: 4, task: 'Complete the course 4', status: false },
    { id: 5, task: 'Complete the course 5', status: true },
    { id: 6, task: 'Complete the course 6', status: false },
  ];

  getNewTodoItem(todoTask: any) {
    console.log(todoTask);
    this.listItems.push({ id: this.id, task: todoTask, status: false });
    this.id++;
  }
  onStatusChange(e: { id: number; checked: boolean }) {
    this.listItems.forEach((item) => {
      if (item.id === e.id) {
        item.status = e.checked;
      }
    });
  }
  DeleteItem(id: number) {
    console.log('Parent ', id);
    const newArr = this.listItems.filter((item) => item.id != id);
    this.listItems = newArr;
  }
  updateValue(e: any) {
    console.log(e);
    this.listItems.forEach((item) => {
      if (item.id === e.id) {
        item.task = e.updatedValue;
      }
    });
  }
}

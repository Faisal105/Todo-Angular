import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ServiceService } from '../../../../service/service.service';
@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css'],
})
export class TodoFormComponent implements OnInit {
  @Output() onAdd = new EventEmitter<string>();
  todoTask = '';

  constructor(private Service: ServiceService) {}
  // todos: any[] = [];
  ngOnInit(): void {}
  // getTodos() {
  //   this.Service.getTodos().subscribe(
  //     (data: any) => {
  //       console.log('data', data);
  //       this.todos = data.todos;
  //       console.log(this.todos);
  //     },
  //     (err) => {
  //       console.log('err', err);
  //     }
  //   );
  // }
  onSubmit() {
    if (this.todoTask === '') {
      return alert('Please enter a task');
    }
    this.Service.addTodos({ name: this.todoTask }).subscribe(
      (res: any) => {
        console.log(res.message);
        const data = {
          _id: res.todo._id,
          name: res.name,
          status: res.todo.status,
        };
        this.Service.todos.push(data);
        // this.getTodos();
      },
      (err) => {
        console.log(err);
      }
    );
    // this.onAdd.emit(this.todoTask);

    this.todoTask = '';
    // console.log(this.todoTask);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  //make observer service
  makeChanges$ = new Subject();
  constructor(private httpClient: HttpClient) {}
  todos: any[] = [];
  getTodos() {
    return this.httpClient.get('http://localhost:3000/todos');
  }

  addTodos(data: any) {
    return this.httpClient.post('http://localhost:3000/todo/add', data);
  }

  deleteTodos(id: number) {
    return this.httpClient.delete(`http://localhost:3000/todo/destroy/${id}`);
  }

  updateTodo(data: any) {
    return this.httpClient.put('http://localhost:3000/todo/update', data);
  }
}

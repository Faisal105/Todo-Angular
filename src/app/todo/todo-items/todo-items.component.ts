import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  IterableDiffers,
} from '@angular/core';
import { ServiceService } from '../../../../service/service.service';
@Component({
  selector: 'app-todo-items',
  templateUrl: './todo-items.component.html',
  styleUrls: ['./todo-items.component.css'],
})
export class TodoItemsComponent implements OnInit {
  @Input() listItems: any = [];
  @Output() onStatusChange = new EventEmitter<{
    id: any;
    checked: boolean;
  }>();
  @Output() onDelete = new EventEmitter<number>();
  @Output() onUpdate = new EventEmitter<{ id: number; updatedValue: string }>();

  constructor(private Service: ServiceService) {}
  todos: any[] = [];
  ngOnInit(): void {
    this.getTodos();
  }
  //Get All Todo Items
  getTodos() {
    this.Service.getTodos().subscribe(
      (data: any) => {
        console.log('data', data);
        this.todos = data.todos;
        console.log(this.todos);
      },
      (err) => {
        console.log('err', err);
      }
    );
  }
  checkBoxChange(id: any, e: any) {
    console.log(id);
    console.log(e.target.checked);
    this.onStatusChange.emit({ id, checked: e.target.checked });
  }
  deleteItem(id: any) {
    // this.onDelete.emit(id);
    this.Service.deleteTodos(id).subscribe(
      (res: any) => {
        console.log('data', res);
        this.getTodos();
      },
      (err) => {
        console.log('err', err);
      }
    );
  }
  toggleEdit(item: any, status: boolean) {
    item.edit = status;
  }
  updateTask(item: any, e: any) {
    const id = item.id;
    const updatedValue: string = e.target.previousElementSibling.value;
    const todoId = item._id;
    this.Service.updateTodo({ id: todoId, name: updatedValue }).subscribe(
      (res: any) => {
        console.log('data', res);
        this.getTodos();
      },
      (err) => {
        console.log('err', err);
      }
    );
    // this.onUpdate.emit({ id, updatedValue });
    this.toggleEdit(item, false);
  }
}

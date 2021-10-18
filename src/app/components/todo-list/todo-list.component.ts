import {Component, Input} from '@angular/core';
import {Todo} from "../../models/Todo";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {

  @Input() todoList: Todo[] = [];

  constructor() {
  }

  deleteTodo(index: number): void {
    this.todoList.splice(index, 1);
  }

}

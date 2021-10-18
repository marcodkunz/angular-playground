import {Component} from '@angular/core';
import {Todo} from "../../models/Todo";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todoList: Todo[] = [];

  active: number = 1;

  updateTodos(todoList: Array<Todo>): void {
    this.todoList = todoList;
  }
}

import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Todo} from "../../models/Todo";

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.css']
})
export class TodoInputComponent {

  @Input() todoList: Todo[] = [];

  @Output() updateTodoList = new EventEmitter<Array<Todo>>();

  name: string = '';
  value: string = '';

  constructor() {
  }

  addTodo(): void {
    this.todoList.push({"name": this.name, "todo": this.value});

    this.updateTodoList.emit(this.todoList);

    this.name = '';
    this.value = '';
  }

}

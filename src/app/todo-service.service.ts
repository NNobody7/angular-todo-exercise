import { Injectable } from '@angular/core';
import { Todo } from './model/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {
  private todos: Todo[] = [];
  constructor() { }

  getTodos(){
    return this.todos;
  }
  addTodo(todo: Todo){
    this.todos.push(todo);
  }
}

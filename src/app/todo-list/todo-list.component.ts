import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Todo } from '../model/todo';
import { TodoServiceService } from '../todo-service.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos: Todo[] = [];

  taskForm = new FormGroup({
    name: new FormControl(''),
    task: new FormControl(''),
    due: new FormControl(new Date())
  });

  constructor(private todoService: TodoServiceService) { }

  ngOnInit(): void {
    this.updateList();
  }

  updateList(){
    this.todos = this.todoService.getTodos();
  }

  saveTask(){
    let todo = this.taskForm.getRawValue() as Todo;
    todo.created = new Date();
    console.warn(todo);
    this.todoService.addTodo(todo);
    this.taskForm.reset();
    this.updateList();
  }
}

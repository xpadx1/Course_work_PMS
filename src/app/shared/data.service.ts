import { Injectable } from '@angular/core';
import { ToDo } from './todo.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  todos: ToDo[] = [
    new ToDo('Your personal planner', true),
  ];

  constructor() { }

  getAllTodos(){
    return this.todos;
  }

  addTodo(todo: ToDo){
    this.todos.push(todo);
  }

  updateTodo(index: number, updatedTodo: ToDo){
    this.todos[index] = updatedTodo;
  }

  deleteTodo(index: number){
    this.todos.splice(index, 1);
  }
}

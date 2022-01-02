import { Component, OnInit } from '@angular/core';
import { ToDo } from '../shared/todo.model';
import { DataService } from '../shared/data.service';
import { NgForm } from '@angular/forms';
import { from } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { EditTodoComponent } from '../edit-todo/edit-todo.component';

@Component({
  selector: 'app-to-dos',
  templateUrl: './to-dos.component.html',
  styleUrls: ['./to-dos.component.scss']
})
export class ToDosComponent implements OnInit {

  todos!: ToDo[]
  showValidationErrors: boolean = false

  constructor(private dataService: DataService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.todos = this.dataService.getAllTodos();
  }

  onFormSubmit(form: NgForm){

    if(form.invalid){
      return this.showValidationErrors = true
    }
    
    this.dataService.addTodo(new ToDo(form.value.text))
    this.showValidationErrors = false
    form.reset()

  }

  setComplete(todo: ToDo){
    todo.completed = !todo.completed;
  }

  editTodo(todo: ToDo){
    const index = this.todos.indexOf(todo);

    let dialogRef = this.dialog.open(EditTodoComponent, {
      width: '700px',
      data: todo
    });

    dialogRef.afterClosed().subscribe((result) => {
      if(result){
        this.dataService.updateTodo(index, result)
      }
    })
  }

  deleteTodo(todo: ToDo){
    const index = this.todos.indexOf(todo);
    this.dataService.deleteTodo(index)
  }

  
}

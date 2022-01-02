import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToDo } from '../shared/todo.model';

@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.scss']
})
export class EditTodoComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<EditTodoComponent>,
    @Inject(MAT_DIALOG_DATA) public todo: ToDo) { }

  ngOnInit(): void {
  }

  onFormSubmit(form: NgForm){
    if(form.invalid) return;
    const updatedTodo = {
      ...this.todo,
      ...form.value
    }
    this.dialogRef.close(updatedTodo);
  }

  close(){
    this.dialogRef.close();
  }

}

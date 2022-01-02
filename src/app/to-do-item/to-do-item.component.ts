import { Component, Input, OnInit, Output, EventEmitter, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { ToDo } from '../shared/todo.model';
import tippy from 'tippy.js'


@Component({
  selector: 'app-to-do-item',
  templateUrl: './to-do-item.component.html',
  styleUrls: ['./to-do-item.component.scss']
})
export class ToDoItemComponent implements OnInit {

  @Input() todo!: ToDo
  @Output() todoClicked: EventEmitter<void> = new EventEmitter()
  @Output() editClicked: EventEmitter<void> = new EventEmitter()
  @Output() deleteClicked: EventEmitter<void> = new EventEmitter()

  editValue: string = 'Edit a Task';
  deleteValue: string = 'Delete a Task';

  constructor() { }

  ngOnInit(): void {
  }

  onTodoClick(){
    this.todoClicked.emit();
  }

  onEditClicked(){
    this.editClicked.emit();
  }

  onDeleteClicked(){
    this.deleteClicked.emit();
  }

}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'fel-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  public todoForm: FormGroup;
  public todoList: String[];

  constructor() {
    this.todoList = [];
    this.todoForm = new FormGroup({
      todoItem: new FormControl('')
    });
  }

  public ngOnInit(): void { }

  public onAddTodo(): void {
    console.log('Adding new todo item:', this.todoForm.get('todoItem').value);
    this.todoList.push(this.todoForm.get('todoItem').value);
    this.todoForm.reset();
  }

  public drop(e: CdkDragDrop<string[]>): void {
    moveItemInArray(this.todoList, e.previousIndex, e.currentIndex);
  }

}

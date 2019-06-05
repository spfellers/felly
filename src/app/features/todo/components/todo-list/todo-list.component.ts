import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

export type TodoListItem = { id: number, name: string };

@Component({
  selector: 'fel-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  public todoForm: FormGroup;
  public todoList: TodoListItem[];
  private todoListIndex = 0;

  constructor() {
    this.todoList = [];
    this.todoForm = new FormGroup({
      todoItem: new FormControl('')
    });
  }

  public ngOnInit(): void { }

  public onAddTodo(): void {
    if(!this.todoForm.get('todoItem').value.trim()) {
      return;
    }
    console.log('Adding new todo item:', this.todoForm.get('todoItem').value);
    this.todoList.push({id: this.todoListIndex++, name: this.todoForm.get('todoItem').value});
    this.todoForm.reset();
  }

  public drop(e: CdkDragDrop<string[]>): void {
    moveItemInArray(this.todoList, e.previousIndex, e.currentIndex);
  }

  public onDelete(tdi: TodoListItem): void {
    this.todoList = this.todoList.filter(item => item.id !== tdi.id);
  }

}

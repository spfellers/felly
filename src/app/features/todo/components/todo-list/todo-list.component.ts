import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Router, NavigationEnd } from '@angular/router';

export type TodoListItem = { id: number; name: string };

@Component({
    selector: 'fel-todo-list',
    templateUrl: './todo-list.component.html',
    styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
    public todoForm: FormGroup;
    public todoList: TodoListItem[];
    private todoListIndex = 0;

    constructor(private router: Router) {
        this.todoList = [];
        this.todoForm = new FormGroup({
            todoItem: new FormControl('')
        });
    }

    public ngOnInit() {
        this.router.events.subscribe(evt => {
            if (!(evt instanceof NavigationEnd)) {
                return;
            }
            window.scrollTo(0, 0);
        });
    }

    public onAddTodo(): void {
        if (!this.todoForm.get('todoItem').value.trim()) {
            return;
        }
        console.log(
            'Adding new todo item:',
            this.todoForm.get('todoItem').value
        );
        this.todoList.push({
            id: this.todoListIndex++,
            name: this.todoForm.get('todoItem').value
        });
        this.todoForm.reset();
    }

    public drop(e: CdkDragDrop<string[]>): void {
        moveItemInArray(this.todoList, e.previousIndex, e.currentIndex);
    }

    public onDelete(tdi: TodoListItem): void {
        this.todoList = this.todoList.filter(item => item.id !== tdi.id);
    }

    public onEdit(tdi: TodoListItem): void {
        // turn the text into an input
        //
    }
    // www.flaticon.com
}

import { Component, OnInit,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  @Output() addTodo : EventEmitter<any> = new EventEmitter();

  titlea:string;
  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.titlea);
    const todo = {
      title : this.titlea,
      completed: false
    }

    this.addTodo.emit(todo);
  }
}

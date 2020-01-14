import { Component, OnInit } from '@angular/core';
import { Todo } from '../../modoles/Todo';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todoss:Todo[];

  constructor(private todoService:TodoService) { }

  ngOnInit() {
    // this.todos = [
    //   {
    //     id:1,
    //     title: 'Todo One',
    //     completed:true,
    //   },
    //   {
    //     id:2,
    //     title: 'Todo Two',
    //     completed:true,
    //   },
    //   {
    //     id:3,
    //     title: 'Todo Three',
    //     completed:false,
    //   },
      

    // ]
    this.todoService.getTodos().subscribe(todosss => {
      this.todoss = todosss;
    });
  }

  deletesTodo(todo:Todo){
    console.log('delete me');
    //Remove from UI
    console.log("Todoss : ",this.todoss);
    this.todoss = this.todoss.filter(t => t.id !== todo.id);
    //Remove from server
    this.todoService.deleteTodo(todo).subscribe();
  }

  addsTodo(todo:Todo){
    this.todoService.addedTodo(todo).subscribe(todo => {
      this.todoss.push(todo);
    });
  }
}

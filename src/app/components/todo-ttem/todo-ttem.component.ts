import { Component, OnInit, Input,EventEmitter ,Output} from '@angular/core';
import { TodoService } from '../../services/todo.service'
import { Todo } from 'src/app/modoles/Todo';

@Component({
  selector: 'app-todo-ttem',
  templateUrl: './todo-ttem.component.html',
  styleUrls: ['./todo-ttem.component.css']
})
export class TodoTtemComponent implements OnInit {
  @Input() todo: Todo;
  @Output() deleteTodo : EventEmitter<Todo> = new EventEmitter();

  constructor(private todoService:TodoService) { }

  ngOnInit() {
  }

  //Set Dynamic Classes
  setClasses(){
    let classes = {
      todo: true,
      'is-complete':this.todo.completed
    }

    return classes;
  }

  //onToggle
  onToggle(todo){
    console.log("test:",todo);
    console.log('toggle');
    //Toggle in UI
    todo.completed = !todo.completed
    //Toggle on server
    this.todoService.toggleCompleted(todo).subscribe(todo => 
      console.log("after: ",todo));
  }

  onDelete(todo){
    console.log("onDelete: ",todo);
    this.deleteTodo.emit(todo);
    
  }
}

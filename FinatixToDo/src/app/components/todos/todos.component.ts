import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/dataModels/Todo'

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos?: Todo[] =[
    {
     content: 'Homework',
     completed: false 
    },
    {
      content: 'Shopping',
      completed: false 
    },  
    {
      content: 'Training',
      completed: false 
    },
  ];
  
  newTodo:string = "";

  constructor() {
  }

  ngOnInit(): void {
  }

  toggleCompleted(id:number): void {
    this.todos?.map((todo, i) => {
      if (i == id) todo.completed = !todo.completed;
    })
    setTimeout(() => {
      // call toggleCompleted() after a delay of 1000ms
      this.deleteTodo(id);
    }, 1000);
  }

  deleteTodo(index:number): Todo[] {
    if (!this.todos) return [];
  
    this.todos = this.todos!.filter((todos, i) => i !== index);
    return this.todos;
  }

  addTodo(): void{

    this.todos!.push(
      {
        content: this.newTodo,
        completed: false
      }
    )
    this.newTodo = "";
  }
}

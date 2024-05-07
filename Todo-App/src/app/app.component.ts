import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Todo App';
  task: any = "";
  tasks: any = [];
  count: any = 0;

  ngOnInit(): void {
    //throw new Error('Method not implemented.');
    this.tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
  }

  addTask() {
    if (this.task !== null || this.task !== undefined || this.task !== " ") {
      this.tasks.push(this.task);
      localStorage.setItem("tasks", JSON.stringify(this.tasks));
    }

    this.task = "";
  }

  editTask(taskIndex: any) {
    let newTask = prompt("Edit Task:", this.tasks[taskIndex]);
    if (newTask !== null || newTask !== undefined || newTask !== " ") {
      this.tasks[taskIndex] = newTask;
      localStorage.setItem("tasks", JSON.stringify(this.tasks));
    }
  }

  deleteTask(taskIndex: any) {
    let newList = this.tasks.filter((task: any) => task !== this.tasks[taskIndex]);
    this.tasks = newList;
    localStorage.setItem("tasks", this.tasks);
  }
}

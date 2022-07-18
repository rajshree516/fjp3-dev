import React, { Component } from 'react'


export class Todo extends Component {
  constructor(){
    super();
    this.state={
      tasks:[
        {task: 'get milk ' , id:1},{task:'Attend a meeting' , id:2}
      ],
      currentTask :''
    } ;
  }
  render() {
    return (
      <div>
        <input type="text"/>
        <button>Add Task</button>
        <ul>
          {this.state.tasks.map((taskObj) =>(
            <li>
              <p>{taskObj.task}</p>
              <button>Delete</button>
            </li>
           ))}
        </ul>
      </div>
    )
  }
}

export default Todo



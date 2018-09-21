import React, { Component } from 'react';
import './App.css';
import AddBar from '../components/AddBar';
import TaskList from '../components/TaskList';

class App extends Component {
  constructor() {
    super()
    this.state = {
      tasks: []
    }
  }

  // Event handler for submitting new tasks
  // Copies state array, adds the new item, and then sets the state to the updated array
  // Prevents page refresh and clears input element
  onAddSubmit = (event) => {
    event.preventDefault();
    const tasksBuffer = this.state.tasks.slice();
    tasksBuffer.push(event.target.task.value);
    this.setState({ tasks: tasksBuffer })
    event.target.task.value = '';
  }

  onTaskClick = (event) => {
    const tasksBuffer = this.state.tasks.slice();
    tasksBuffer.splice(event.target.getAttribute('data-key'), 1);
    this.setState({ tasks: tasksBuffer });
    console.log(this.tasks);
  } 

  render() {
    // console.log(this.state.tasks);
    return (
      <div>
        <AddBar addSubmit={ this.onAddSubmit }/>
        <TaskList taskClick={ this.onTaskClick } tasks={ this.state.tasks }/>
      </div>
    );
  }
}

export default App;

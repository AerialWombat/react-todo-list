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
  // Copies state array, adds the new item, and then sets the state to updated array
  // Prevents page refresh and clears input element
  onAddSubmit = (event) => {
    event.preventDefault();
    const tasksBuffer = this.state.tasks.slice();
    tasksBuffer.push(event.target.task.value);
    this.setState({ tasks: tasksBuffer })
    event.target.task.value = '';
  }

  // Event handler for click event on each task
  // Copies state array, removes element with key that created event, and sets the state to updated array
  onTaskClick = (event) => {
    const tasksBuffer = this.state.tasks.slice();
    tasksBuffer.splice(event.target.getAttribute('data-key'), 1);
    this.setState({ tasks: tasksBuffer });
    console.log(this.tasks);
  } 

  render() {
    // console.log(this.state.tasks);
    return (
      <div className='w-75 center flex flex-column items-center'>
        <TaskList taskClick={ this.onTaskClick } tasks={ this.state.tasks }/>
        <AddBar addSubmit={ this.onAddSubmit }/>
      </div>
    );
  }
}

export default App;

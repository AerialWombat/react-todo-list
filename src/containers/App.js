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

  onAddSubmit = (event) => {
    event.preventDefault();
    const tasksBuffer = this.state.tasks.slice();
    tasksBuffer.push(event.target.task.value);
    this.setState({ tasks: tasksBuffer })
    event.target.task.value = '';
  }

  render() {
    console.log(this.state.tasks);
    return (
      <div>
        <AddBar addSubmit={ this.onAddSubmit }/>
        <TaskList tasks={ this.state.tasks }/>
      </div>
    );
  }
}

export default App;

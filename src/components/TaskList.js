import React from 'react';
import Task from './Task';
// import './TaskList.css'

const TaskList = ({ taskClick, tasks }) => {
    return (
        <div className='flex flex-column items-center'>
        <h1>Todo-List</h1>
        <form className='pa1 center measure mw7'>
            <fieldset id='Tasks' className='bn w5'>
                {
                    tasks.map((task, index) => {
                        return (
                            <Task 
                                reactKey={index} 
                                task={tasks[index]} 
                                taskClick={ taskClick }
                            />
                        )
                    })
                }
            </fieldset>
        </form>
        </div>
    )
}

export default TaskList;
import React from 'react';
import Task from './Task';
// import './TaskList.css'

const TaskList = ({ taskClick, tasks }) => {
    return (
        <div className='flex flex-column items-center'>
        <h1 style={{ fontWeight: '700' }}>Todo-List</h1>
        <form className='pa2 center measure mw7' style={{ overFlowX: 'hidden', overflowY: 'auto', height: '75vh' }}>
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
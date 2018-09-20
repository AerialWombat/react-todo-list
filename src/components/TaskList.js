import React from 'react';
import Task from './Task';

const TaskList = ({ taskClick, tasks }) => {
    return (
        <form className='pa4 center measure'>
            <fieldset id='Tasks' className='bn'>
                <legend class='fw7 mb2'>Todo-List</legend>
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
    )
}

export default TaskList;
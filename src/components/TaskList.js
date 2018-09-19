import React from 'react';

const TaskList = ({ tasks }) => {
    return (
        <form className='pa4'>
            <fieldset id='Tasks' className='bn'>
                <legend class='fw7 mb2'>Todo-List</legend>
                {
                    tasks.map((task, i) => {
                        return (
                            <div>
                                <input class='mr2' type='checkbox' id={tasks[i]} value={tasks[i]}/>
                                <label for={tasks[i]} class='1h-copy'>{tasks[i]}</label>
                            </div>
                        )
                    })
                }
            </fieldset>
        </form>
    )
}

export default TaskList;
import React from 'react';

const Task = ({ reactKey, task, taskClick }) => {
    return (
        <div data-key={reactKey} className='lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30'>
            <input data-key={reactKey} className='mr2' type='button'  value='Done' onClick={ taskClick }/>
            <label for={task} class='1h-copy'>{task}</label>
        </div>
    )
}

export default Task;
import React from 'react';

const Task = ({ reactKey, task, taskClick }) => {
    return (
        <div data-key={reactKey} className='mt3 mb3 pa2 pv1 mw7 flex flex-row justify-start grow shadow-hover' style={{ 'overflow-wrap': 'break-word', cursor: 'default' }}>
            <input data-key={reactKey} className='mr2 fl pointer' type='button'  value='Done' onClick={ taskClick }/>
            <label className='' for={task}>{task}</label>
        </div>
    )
}

export default Task;
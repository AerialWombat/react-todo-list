import React from 'react';

const Task = ({ reactKey, task, taskClick }) => {
    return (
        <div data-key={reactKey} className='mt3 mb3 pa2 pv1 mw7 bb b--silver flex flex-row justify-start items-center shadow-hover' style={{ 'overflow-wrap': 'break-word', cursor: 'default' }}>
            <button data-key={reactKey} className='mr2 b--none pointer dim material-icons' style={{background: 'none'}} type='button' onClick={ taskClick }>
                <i className='' >check_circle</i>
            </button>
            <label className='' for={task}>{task}</label>
        </div>
    )
}

export default Task;
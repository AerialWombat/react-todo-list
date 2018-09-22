import React from 'react';
import './Task.css';

const Task = ({ reactKey, task, taskClick }) => {
    return (
        <div data-key={reactKey} className='mt3 mb3 pa2 pv1 mw7 flex flex-row justify-start grow shadow-hover' style={{ 'overflow-wrap': 'break-word', cursor: 'default' }}>
            <button data-key={reactKey} className='mr2 fl pointer material-icons' type='button' onClick={ taskClick }>
                <i>play_arrow</i>
            </button>
            <label className='' for={task}>{task}</label>
            <i className='material-icons'>face</i>
        </div>
    )
}

export default Task;
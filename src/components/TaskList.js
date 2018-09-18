import React from 'react';

const TaskList = ({ tasks }) => {
    return (
        <div>
            {
                tasks.map((task, i) => {
                    return (
                        <div >
                            <p>{tasks[i]}</p>
                            <input
                                type='checkbox'
                            />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default TaskList;
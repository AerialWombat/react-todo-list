import React from 'react';

const AddBar = ({ clearValue, addSubmit }) => {
    return (
        <div>
            <form onSubmit={ addSubmit }>
                <input
                    className=''
                    type='text'
                    name='task'
                    placeholder='Enter new task'
                />
                <input
                    className=''
                    type='submit'
                    value='Add'
                />
            </form>
        </div>
    );
}

export default AddBar;
import React from 'react';

const AddBar = ({ clearValue, addSubmit }) => {
    return (
            <form className='center' onSubmit={ addSubmit }>
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
    );
}

export default AddBar;
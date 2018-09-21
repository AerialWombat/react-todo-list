import React from 'react';

const AddBar = ({ addSubmit }) => {
    return (
        <form className='' onSubmit={addSubmit}>
            <input
                className=''
                type='submit'
                value='Add'
            />
            <input
                className='mr2 bb b--solid b--silver bw1 bt-0 br-0 bl-0'
                style={{ background: 'transparent' }}
                type='text'
                name='task'
                placeholder='Enter new task'
            />
        </form>
    );
}

export default AddBar;
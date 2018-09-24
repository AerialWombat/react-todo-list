import React from 'react';

const AddBar = ({ addSubmit }) => {
    return (
        <form className='flex flex-row items-center' style={{minWidth: '300px'}} onSubmit={addSubmit}>
            <button className='pa2 b--none pointer dim material-icons' style={{background: 'none'}} type='submit' value='Add'>add_box</button>
            <input
                className='mr2 bb b--solid b--silver bw1 bt-0 br-0 bl-0'
                style={{ background: 'transparent' }}
                type='text'
                name='task'
                autoComplete='off'
                placeholder='Enter new task'
            />
        </form>
    );
}

export default AddBar;
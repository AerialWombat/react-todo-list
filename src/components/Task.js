import React from 'react';

const Task = ({ reactKey, task, taskClick }) => {
    return (
        <div data-key={reactKey} className='lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30'>
            <input data-key={reactKey} className='mr2' type='button'  value='Done' onClick={ taskClick }/>
            <label for={task} class='1h-copy'>{task}</label>
        </div>

        // <label id={ index } class='db 1h-copy' onClick={ taskClick }>
        //     <input class='mr2' type='button' value='Done'/>
        //     {task}
        // </label>
    )
}

export default Task;

// class Task extends Component {
//     render() {
//         return (
//             <div className='lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30' onClick={this.taskClick}>
//                 <input className='mr2' type='button' value='Done' />
//                 <label for={this.task} class='1h-copy'>{this.task}</label>
//             </div>
//         )
//     }

//     taskClick() {
//         this.props.taskClick(this.props.reactKey);
//     }
// }

// export default Task;
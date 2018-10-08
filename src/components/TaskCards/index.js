import React, {Component} from 'react';

class TaskCards extends Component {

    onBtnClick = (e) => {
        const targetId = e.target.dataset.id;
        this.props.deleteTask(targetId);
    }

    render() {
        const { tasks } = this.props;

        const { onBtnClick } = this;

        if (!tasks.length) { return null }

        return (
            <div>{
                tasks.map(task => {
                return <div >
                    <h3>Task: </h3>
                    <p>{task.text}</p>
                    <button data-id={task.id} onClick={e => onBtnClick(e)}>del</button>
                </div>
            })
            }
            </div>
        )
    }
}

export default TaskCards

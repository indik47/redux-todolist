import React, {Component} from 'react';
import {connect} from 'react-redux';

import {mapStateToProps, mapDispatchToProps} from './redux';
import TaskCards from '../TaskCards';

class TaskInput extends Component {

    state = {
        task: '',
    };

    addTask = e => {
        const data = e.target.value;

        this.setState({
            ...this.state,
            task: data,
        })
    };

    onBtnClick = () => {
        const { task } = this.state;
        if (!task) { return; }
        this.props.addTaskToState(task);
        this.setState({task:''})
    };

    render() {
        const { task } = this.state;
        const { onBtnClick } = this;

        return (
            <div>
                <input type="text"
                       value={task}
                       onChange={this.addTask}
                />
                <button onClick={onBtnClick}>add</button>

                <TaskCards tasks={this.props.allTasks}
                           deleteTask={this.props.deleteTask}
                />

            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskInput);
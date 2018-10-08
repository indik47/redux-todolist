import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addTask} from '../../store/actions/addTask';
import {deleteTask} from '../../store/actions/deleteTask';
import TaskCards from '../TaskCards';

class TaskInput extends Component {

    state = {
        task: '',
    }

    addTask = e => {
        const data = e.target.value;

        this.setState({
            ...this.state,
            task: data,
        })
    }

    onBtnClick = () => {
        const { task } = this.state;
        this.props.addTaskToState(task);
    }

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

const mapStateToProps = store => {
    return {
        allTasks: store.tasks,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addTaskToState: task => dispatch( addTask(task) ),
        deleteTask: id => dispatch ( deleteTask(id) ),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskInput);
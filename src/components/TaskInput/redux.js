import {deleteTask} from "../../store/actions/deleteTask";
import {addTask} from "../../store/actions/addTask";

export const mapStateToProps = store => {
    return {
        allTasks: store.tasks,
    }
};

export const mapDispatchToProps = dispatch => {
    return {
        addTaskToState: task => dispatch( addTask(task) ),
        deleteTask: id => dispatch ( deleteTask(id) ),
    };
};
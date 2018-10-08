import { ADD_TASK } from '../actions/addTask';
import { DELETE_TASK } from '../actions/deleteTask';

export default function (state = [], action) {
        switch (action.type) {
            case ADD_TASK: {
                return [{
                    id: new Date().getUTCSeconds(),
                    text: action.payload,
                }, ...state];
            }
            case DELETE_TASK: {
                const copy = JSON.parse(JSON.stringify(state));

                const filtered = copy.filter( task => {
                    return task.id !== action.payload
                })

                return {...state, filtered}
            }

            default: return state;
        }
}
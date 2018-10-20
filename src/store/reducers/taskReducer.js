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
                const copy = [...state];

                const filtered = copy.filter( task => {
                    return task.id !== Number(action.payload)
                });

                return filtered
            }

            default: return state;
        }
}
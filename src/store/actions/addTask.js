export const ADD_TASK='ADD_TASK';

export function addTask(data) {
    return {
        type: ADD_TASK,
        payload: data
    }
}
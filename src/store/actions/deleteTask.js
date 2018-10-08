export const DELETE_TASK='DELETE_TASK';

export function deleteTask(id) {
    return {
        type: DELETE_TASK,
        payload: id,
    }
}
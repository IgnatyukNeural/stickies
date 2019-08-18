const ADD_TASK = 'ADD_TASK'
const DELETE_TASK = 'DELETE_TASK'
const TOGGLE_TASK = 'TOGGLE_TASK'
const EDIT_TASK = 'EDIT_TASK'

export const taskAction = {
    ADD_TASK,
    DELETE_TASK,
    TOGGLE_TASK,
    EDIT_TASK
}

export function addTask(tabName, taskName) {
    return {
        type: ADD_TASK,
        data: {
            tabName,
            taskName
        }
    }
}

export function deleteTask(tabName, taskName) {
    return {
        type: DELETE_TASK,
        data: {
            tabName,
            taskName
        }
    }
}

export function toggleTask(tabName, taskName, isCompleted) {
    return {
        type: TOGGLE_TASK,
        data: {
            tabName,
            taskName,
            isCompleted
        }
    }
}

export function editTask(tabName, oldTaskName, newTaskName) {
    return {
        type: EDIT_TASK,
        data: {
            tabName,
            taskName
        }
    }
}
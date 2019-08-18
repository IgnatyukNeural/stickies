import { taskAction } from '../actions/taskActions';
import {
    addTab,
    addTaskToTab,
    deleteTab,
    deleteTask,
    toggleTask,
    updateTabName,
    updateTaskName
} from "../Database/Database";

const initialState = {
    tabs: []
}

function stickiesApp(state = initialState, action) {
    switch(action.type) {
        case taskAction.ADD_TASK:
            return 
    }
}
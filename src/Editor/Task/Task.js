import React, { Component } from 'react';
import './Task.css';

import { EditableText } from '@blueprintjs/core';
import '@blueprintjs/core/lib/css/blueprint.css';

import { updateTaskName, toggleTask, deleteTask } from '../../Database/Database';

class Task extends Component {
    constructor(props) {
        super(props);
        this.state = {
            taskName: this.props.task.taskName,
            isCompleted: this.props.task.isCompleted
        }
    }

    getStyleForTask = () => {
        return {
            textDecoration: this.state.isCompleted ? 'line-through' : 'none',
            color: this.state.isCompleted ? 'green' : 'black'
        }
    }

    getStyleForInput = (event) => {
        return this.state.isCompleted ? event.target.setAttribute('checked') : ''
    }

    handleToggle = (e) => {
        this.setState({isCompleted: e.target.checked})
        toggleTask(this.props.tabName, this.state.taskName, this.state.isCompleted)
    }

    handleTaskNameChange = (e) => {
        this.setState({taskName: e})
        const { tabName, task: { taskName } } = this.props;
        console.log(tabName, taskName, e); 
        updateTaskName(tabName, taskName, e);
    }

    handleTaskDelete = () => {
        const { tabName } = this.props;
        deleteTask(tabName, this.state.taskName)
    }

    render() {
        return <div className="task" style={this.getStyleForTask()}>
            <input onChange={this.handleToggle} type="checkbox" defaultChecked={this.state.isCompleted} />
            <EditableText
                defaultValue={this.state.taskName}
                onConfirm={this.handleTaskNameChange}
            />
            <button onClick={this.handleTaskDelete} className="p__deletebtn">&times;</button>
        </div>
    }

}

export default Task;
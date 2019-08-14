import React, { Component } from 'react';
import './Task.css';

import { EditableText } from '@blueprintjs/core';
import '@blueprintjs/core/lib/css/blueprint.css';

import { updateTaskName } from '../../Database/Database';

class Task extends Component {
    constructor(props) {
        super(props);
        this.state = {
            taskName: this.props.task.taskName,
            isCompleted: this.props.task.isCompleted
        }
    }

    toggleTask = () => {
        console.log('foo bar');
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

    handleTaskNameChange = (e) => {
        this.setState({taskName: e})
        const { tabName, task: { taskName } } = this.props;
        console.log(tabName, taskName, e); 
        updateTaskName(tabName, taskName, e);
    }

    render() {
        return <div className="task">
            <input onChange={this.toggleTask} type="checkbox" defaultChecked={this.state.isCompleted} />
            <EditableText
                defaultValue={this.state.taskName}
                onConfirm={this.handleTaskNameChange}
            />
            <button className="p__deletebtn">&times;</button>
        </div>
    }

}

export default Task;
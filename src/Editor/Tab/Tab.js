import React, { Component } from 'react';
import Task from '../Task/Task';
import './Tab.css';
import CreateTask from '../CreateTask/CreateTask';

import { updateTabName } from '../../Database/Database';
import { Popover, PopoverInteractionKind, Position, Button, Classes, EditableText } from '@blueprintjs/core';
import '@blueprintjs/core/lib/css/blueprint.css'

class Tab extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tabName: this.props.tab.tabName,
            isCompleted: this.props.tab.isCompleted,
            isPopupOpen: false,
            tasks: this.props.tab.tasks,
            isMinimized: false
        }
    }

    toggleMinimize = () => {
        this.setState({isMinimized: !this.state.isMinimized})
    }

    getStyleForTasks = () => {
        return {
            display: this.state.isMinimized ? 'none' : 'block'
        }
    }

    handleDeleteTab = () => {
        this.props.deleteTab(this.state.tabName)
    }

    handlePopUpOpen = () => {
        this.setState({isPopupOpen: true})
    }

    handlePopUpClose = () => {
        this.setState({isPopupOpen: false})
    }

    handleHeaderChange = (e) => {
        const oldTabName = this.props.tab.tabName;
        const newTabName = this.state.tabName;
        updateTabName(oldTabName, newTabName);
    }

    render() {
        return(
            <div className="tab">
                <div className="colorful-header">
                    <div className="control-panel">
                        <Button intent="success" text="+" onClick={this.handlePopUpOpen}/>
                        <Button intent="primary" text="-" onClick={this.toggleMinimize} />
                        <Popover
                            interactionKind={PopoverInteractionKind.CLICK}
                            popoverClassName="bp3-popover-content-sizing"
                            position={Position.BOTTOM}
                        >
                            <Button intent="danger">&times;</Button>
                            <div>
                                <h5>Delete this tab?</h5>
                                <p>All todos will be lost as a result</p>
                                <Button text="Delete" intent="danger" onClick={this.handleDeleteTab} />
                                <Button text="Cancel" intent="primary" className={Classes.POPOVER_DISMISS}/>
                            </div>
                        </Popover>
                    </div>
                    <div className="tabContainer">
                        <EditableText
                            style={{color: 'white'}}
                            defaultValue={this.state.tabName}
                            intent="primary"
                            onConfirm={this.handleHeaderChange}
                            onChange={(e) => this.setState({tabName: e})}
                            
                            />
                    </div>
                </div>
                <div className="tasks" style={this.getStyleForTasks()}>
                    {this.state.tasks.map((task, key) => (
                        <Task 
                            tabName={this.state.tabName}
                            toggleTask={this.props.toggleTask}
                            task={task} 
                            key={key} 
                        />
                    ))}
                </div>

                {this.state.isPopupOpen ?
                    <CreateTask isOpen={this.state.isPopupOpen}
                                tabName={this.state.tabName}
                                handlePopUpClose={this.handlePopUpClose}
                                addTaskToTab={this.props.addTaskToTab}
                    />
                    :
                    null
                }
          </div>  
        )
    }
}

export default Tab;
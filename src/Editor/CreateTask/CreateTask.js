import React, { Component } from 'react';
import './CreateTask.css'

import { Dialog, Classes, Button, FormGroup, InputGroup } from '@blueprintjs/core';
import '@blueprintjs/core/lib/css/blueprint.css'

class CreateTask extends Component {
    constructor(props) {
        super(props);
        this.state = {
            taskName: '',
            isDialogOpen: true,
            tabName: this.props.tabName
        }
    }

    handleClose = () => {
        this.setState({isDialogOpen: false})
        this.props.handlePopUpClose()
    }

    handleSumbit = (e) => {
        e.preventDefault();
        const { tabName, taskName} = this.state;
        this.props.addTaskToTab(tabName, taskName)
    }

    render() {
        return(
            <div>
                <Dialog style={{padding: '15px'}} 
                        onClose={this.handleClose} 
                        isOpen={this.state.isDialogOpen}
                        className="createtask__dialog"
                        icon="add"
                        title="Create new task"
                >
                    <FormGroup
                        helperText="Task name"
                        labelFor="text-input"
                        labelInfo="(required)"
                        inline={false}
                    >
                    <InputGroup style={{marginTop: '10px'}}
                                id="text-input"
                                placeholder="Task name" 
                                onChange={ (e) => this.setState({taskName: e.target.value}) }
                    />
                    </FormGroup>
                    <Button type="submit" 
                            text="Create" 
                            icon="add" 
                            intent="success" 
                            onClick={this.handleSumbit} 
                    />
                </Dialog>
            </div>
        )
    }

}

export default CreateTask;
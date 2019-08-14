import React, { Component } from 'react';
import { Button, Dialog, FormGroup, Label, InputGroup } from '@blueprintjs/core';
import './CreateTab.css';
import '@blueprintjs/core/lib/css/blueprint.css';
import { db } from '../../Database/Database';

class CreateTab extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDialogOpen: false,
            tabName: ''
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.handleDialogClose()
        const { tabName } = this.state;
        this.props.addTab(tabName)
    }
    
    handleDialogOpen = () => {
        this.setState({isDialogOpen: true})
    }

    handleDialogClose = () => {
        this.setState({isDialogOpen: false})
    }

    render() {
        return(
            <div className="createtab">
                <Button onClick={this.toggleForm} text="+" onClick={this.handleDialogOpen} type="button" intent="primary"/>
                
                <Dialog icon="add"
                        onClose={this.handleDialogClose} 
                        isOpen={this.state.isDialogOpen}
                        title="Add new tab"
                >

                    <FormGroup>
                        <InputGroup onChange={(e) => this.setState({tabName: e.target.value})} placeholder="Tab name" />
                        <Button type="submit" onClick={this.handleSubmit} text="Create" intent="success" />
                    </FormGroup>

                </Dialog>

            </div>
        )
    }

}

export default CreateTab;
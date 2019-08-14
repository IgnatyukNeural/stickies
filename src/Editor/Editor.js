import React, { Component } from 'react';
import './Editor.css';

import CreateTab from './CreateTab/CreateTab';
import Navbar from './Navbar/Navbar';
import TabContainer from './TabContainer/TabContainer';

import { db, addTab, addTaskToTab, deleteTab } from '../Database/Database';

export default class Editor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tabs: []
        }
    }

    componentDidMount() {
        this.loadTabs()
    }

    loadTabs = () => db.table('tabs').toArray().then(tabs => this.setState({ tabs })); //Load tabs

    addTab = (tabName) => {
        addTab(tabName)
        this.loadTabs()
    }

    deleteTab = (tabName) => {
        deleteTab(tabName);
        this.loadTabs();
    }

    addTaskToTab = (tabName, taskName) => {
        addTaskToTab(tabName, taskName);
        this.loadTabs();
    }

    render() {
        return(
            <div className="app">
                <Navbar />
                <CreateTab addTab={this.addTab} />
                <TabContainer
                    deleteTab={this.deleteTab}
                    addTaskToTab={this.addTaskToTab}
                    toggleTask={this.toggleTask}
                    tabs={this.state.tabs} 
                />
            </div>
        )
    }

}
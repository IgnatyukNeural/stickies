import React, { Component } from 'react';

class ManageTabs extends Component {
    constructor(props) {
        super(props);
        this.props = {
            tabs: this.props.tabs
        }
    }

    render() {
        const { tabs } = this.state;
        
        return(
            <div className="managetabs__container">
                {tabs.map((tab, key) => (
                    <div className="managetabs__tab">
                        {tab.tabName}
                    </div>
                ))}
            </div>
        );

    }

}
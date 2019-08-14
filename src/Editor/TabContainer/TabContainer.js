import React, { Component } from 'react';
import Tab from '../Tab/Tab';

function TabContainer(props) {
  return(
    <div className="tabs__container">
      {props.tabs.map((tab, key) => (
        <Tab addTaskToTab={props.addTaskToTab}
             tab={tab}
             key={key} 
             deleteTab={props.deleteTab}
          />
      ))}
    </div>
  )
} 

export default TabContainer;
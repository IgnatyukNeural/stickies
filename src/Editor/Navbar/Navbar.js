import React, { Component } from 'react';
import { Button } from '@blueprintjs/core';

import './Navbar.css';

function Navbar() {
    return(
        <div className="navbar">
            <nav>
                <Button intent="success" text="New tab" />
                <Button intent="primary" text="Manage tabs" />
            </nav>
        </div>
    )
    
}

export default Navbar;
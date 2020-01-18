import React, { Component } from 'react';
import Navsearch from './navsearch';


class NavBar extends Component {
    render() {
        const { value, onChange, onSubmit } = this.props;
        return (
            <React.Fragment>
            <nav style={{ marginBottom: 50 }}className="navbar navbar-light bg-light">
                <a className="navbar-brand" href="">
                    Oracle 
                </a>
                <span className="navbar-text">
                    Cards Saved: ({ this.props.storage.length })
                </span>
                <Navsearch value={value} onChange={onChange} onSubmit={onSubmit}/>
            </nav>
            </React.Fragment>
            
        )
    }
}

export default NavBar;
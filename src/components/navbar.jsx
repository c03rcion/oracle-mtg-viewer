import React, { Component } from 'react';

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


                
                <form 
                    className="form-inline my-2 my-md-0"
                    onSubmit={onSubmit}
                    >
                    <div className="input-group mb-3">
                        <input 
                            type="text" 
                            className="form-control" 
                            value={value}
                            onChange={onChange}
                        />
                            <div className="input-group-append">
                                <button 
                                    className="btn btn-outline-success my-2 my-sm-0" 
                                    type="submit"
                                        ><i className="fas fa-search"></i>
                                </button>
                            </div>
                    </div>
                </form>
            </nav>
            </React.Fragment>
            
        )
    }
}

export default NavBar;
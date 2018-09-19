import React, { Component } from 'react';

class NavSearch extends Component {
    render() {
        const { value, onChange } = this.props;
        return (
            <React.Fragment>
                <form className="form-inline my-2 my-lg-0">
                    <div className="input-group mb-3">
                        <input 
                            type="text" 
                            className="form-control" 
                            aria-label="magic"
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
            </React.Fragment> 
        )
    }
}

export default NavSearch;
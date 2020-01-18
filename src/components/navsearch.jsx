import React, { Component } from 'react';

class NavSearch extends Component {
    render() {
        const { value, onChange, onSubmit } = this.props;
        return (
            <form className="form-inline my-2 my-lg-0" onSubmit={onSubmit}>
                <div className="input-group mb-3">
                    <input
                        id="cardSearch" 
                        type="text"
                        label="search"
                        className="form-control" 
                        aria-label="magic"
                        value={value}
                        onChange={onChange}
                    />
                    <div className="input-group-append">
                        <button type="submit" className="btn btn-default input-group-text"><i className="fas fa-search"></i></button>
                    </div>
                </div>
            </form>
            
    )
    }
}

export default NavSearch;
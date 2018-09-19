import React, { Component } from 'react';

class Legalities extends Component {
    render() {
        const { result } = this.props;
        return (
                <div className="card">
                    <h3 style={{ textAlign: 'center'}}>Legalities</h3>
                    <ul className="list-group list-group-flush" 
                        style={{ listStyleType: 'none'}}
                    >
                     {result.legalities.map(legal => 
                    <li className="list-group-item"
                        style={{ textAlign: 'center'}} 
                        key={result.legalities.indexOf(legal)}
                    >   
                      {legal.format}: <span className="badge badge-success">{legal.legality}</span>
                    </li>)}
                </ul>
            </div>
        )
    }
}

export default Legalities;


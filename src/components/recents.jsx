import React, { Component } from 'react';

class Recents extends Component {
    render() {
        const { storage } = this.props;
        
        return (
                <div className="card mt-5">
                    <h3 style={{ textAlign: 'center'}}>Saved Cards ({ this.props.storage.length })</h3>
                    <ul className="list-group list-group-flush" 
                        style={{ listStyleType: 'none'}}
                    >
                    {storage.map(card => {
                        return (
                            <li key={card.id} style={{ textAlign: 'center'}} className="list-group-item">
                                <a href={card.imageUrl}
                                >            
                                    {card.name} <br/> {card.setName}
                                </a>
                                <button type="button" 
                                        className="float-right btn btn-danger"
                                        onClick={() => this.props.onClick(card.name)}
                                >
                                    X
                                </button>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

export default Recents;
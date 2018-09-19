import React, { Component } from 'react';
import Rulings from './rulings';
import Legalities from './legalities';
import Printings from './printings';
import Recents from './recents';

class Table extends Component {

    render () {
        const { result, error, onClick, removeCard, storage } = this.props;
        console.log(result.manaCost)
        if (error) {
            return <p>Card not found.</p>;
          }
        return (
            <div className="row">
                <div className="col-md-3 col-xs-12">
                    <img className="mx-auto" alt="" src={result.imageUrl}/>
                    <button 
                        type="button" 
                        className="btn btn-primary mx-auto mt-4 mb-4"
                        style={{ display: "block" }}
                        onClick={onClick}
                    >
                        Save
                    </button>
                    
                </div>
                <div className="col-md-6 col-xs-12">
                    <h3 style={{ textAlign: 'center'}}>{result.setName}: {result.name}</h3>
                    <h5 style={{ textAlign: 'center'}}>
                        Casting Cost: {result.manaCost}<i className="ms ms-x ms-cost ms-shadow"></i>
                        <i className="ms ms-r ms-cost ms-shadow"></i>
                    </h5>
                    <h5 style={{ textAlign: 'center'}}>Type: {result.originalType}</h5>
                    <h5 style={{ textAlign: 'center'}}>Edition: {result.setName}</h5>
                    <h5 style={{ textAlign: 'center'}}>Rarity: {result.rarity}</h5>
                    <h5 style={{ textAlign: 'center'}}>Artist: {result.artist}</h5>
                    <hr/>
                    <h5 style={{ textAlign: 'center'}}>Card Text</h5>
                    <h5 style={{ textAlign: 'center', fontStyle: 'italic' }}>
                        {result.text}
                    </h5>
                    <hr/>
                    <Printings result={result} />
                    <Rulings result={result} />    
                </div>
                <div className="col-md-3 col-xs-12">
                    <Legalities result={result} />
                    <Recents result={result} 
                            storage={storage}
                            onClick={removeCard} 
                    />
                    
                </div>
               
            </div>
        )
    }
}

export default Table;
import React, { Component } from 'react';

class Rulings extends Component {
    render() {
        const { result } = this.props;
        return (            
            <section id="rulings" style={{ marginTop: 50}}>
            {result.rulings ? <h5 className="text-center">{result.name} Rulings</h5> : ''}
            {result.rulings ? result.rulings.map(rule =>
                <div key={result.rulings.indexOf(rule)} 
                    style={{ marginBottom: 30}} 
                >
                 <div className="card text-center">
                    <div className="card-header">
                    Ruling #{result.rulings.indexOf(rule) + 1}
                    </div>
                    <div className="card-body">
                        <p className="card-text">{rule.text}</p>
                    </div>
                    <div className="card-footer text-muted">
                        <p>Date: {rule.date}</p>
                    </div>
                </div>
            </div>) : null }
        </section>
        )
    }
    
}

export default Rulings;



            
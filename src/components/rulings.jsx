import React, { Component } from 'react';

class Rulings extends Component {
    render() {
        const { result } = this.props;
        return (            
            <section id="rulings" style={{ marginTop: 50}}>
            {result.rulings ? <h5 className="text-center">{result.name} Rulings</h5> : ''}
            {result.rulings ? result.rulings.map(rule =>
                <div id="accordion" key={result.rulings.indexOf(rule)} 
                    style={{ marginBottom: 30}} 
                >
                 <div className="card text-center text-white bg-success mb-3">
                    <div className="card-header">
                        Ruling #{result.rulings.indexOf(rule) + 1}
                        <a className="float-right"
                            href="#collapseExample"
                            data-toggle="collapse"
                            data-target="#collapseExample"
                            role="button"
                            aria-expanded="false"
                            aria-controls="collapseExample"
                        >
                            <i className="fas fa-caret-down"></i>
                        </a> 
                    </div>
                        <div className="bg-light card-body collapse " id="collapseExample">
                            <p className="text-dark card-text">{rule.text}</p>
                        </div>
                    <div className="text-white card-footer">
                        <p>Date: {rule.date}</p>
                    </div>
                </div>
            </div>) : null }
        </section>
        )
    }
    
}

export default Rulings;



            
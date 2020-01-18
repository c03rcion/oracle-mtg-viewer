import React, { Component } from 'react';

// const pathBase = "https://api.magicthegathering.io/v1";
// const pathSearch = "/cards";
// const setSearch = "set=";
// const paramSearch = "?name=";

class Printings extends Component {

    getSetIcon = print => {
        let classes = "ss ss-";
        classes += print.toLowerCase();
        return classes;
    }

    render() {
        const { result } = this.props;
        const name = result.name;
        return (
            <section id="printings" style={{ marginTop: 30}}>
                <h5 style={{ textAlign: 'center'}}>Printings</h5>
                        <ul style={{ listStyleType: 'none', margin: '0px auto', padding: '0px' }}>
                        {result.printings.map(print => 
                            <li key={result.printings.indexOf(print)}
                                style={{ 
                                display: 'inline-block', 
                                height: '50px', 
                                border: 'solid 1px #ddd', 
                                textAlign: 'center', 
                                position: 'relative', 
                                verticalAlign: 'middle', 
                                lineHeight: '50px', 
                                margin: '5px', 
                                marginLeft: '-2px', 
                                width: '50px',
                                }}
                                    
                            >
                           
                                <a className="btn btn-success" style={{ textDecoration: 'none !important', color: 'white', display: 'block', height: '50px', width: '50px' }}
                                href=""
                                onClick={(event) => this.props.onClick(event, print, name)}>

                               <i style={{ fontSize: 32}}
                                className={this.getSetIcon(print)}
                                data-toggle="tooltip"
                                title={result.setName}
                               />
                             </a>                 
                            </li>)}
                        </ul>
            
             </section>
        )
    }
}

export default Printings;
import React, { Component } from 'react';
import './App.css';

import NavBar from './components/navbar';
import Table from './components/table';


const pathBase = "https://api.magicthegathering.io/v1";
const pathSearch = "/cards";
const setSearch = "set=";
const paramSearch = "?name="; 
const defaultQuery = "fireball";

// do something to handle when user saves twice

class App extends Component {
    state = {
      count: '',
      result: null,
      error: null,
      storage: [],
      searchTerm: defaultQuery,
      isLoading: false,
    }

    

    getCardBySet = (event, print, name) => {
      this.fetchCardBySet(print, name);
      event.preventDefault();
    }
    

    removeCard = name => {
      localStorage.removeItem(name);
      this.fetchLocalStorage();
    }

    fetchLocalStorage = () => {
      let hotdog = [];
      let localStorageLength = localStorage.length
      for (let i = 0; i < localStorageLength; i++) {
        hotdog.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
      };
      this.setState({ storage: hotdog });
      this.setState({ count:  localStorageLength })
    }

    handleButtonClick = () => {
      const { result } = this.state;
      localStorage.setItem(result.name, JSON.stringify(result));
      this.fetchLocalStorage();
    }

    handleSearchChange = event => {
      const searchTerm = event.target.value;
      this.setState({ searchTerm: searchTerm });
    }

    handleSearchSubmit = event => {
      const { searchTerm } = this.state;
      this.fetchCardByName(searchTerm);
      event.preventDefault();
    }

    setSearchResults = result => {
      this.setState({ result: result.cards[0], isLoading: false })
    }

    fetchCardBySet(print, name) {
      fetch(`${pathBase}${pathSearch}${paramSearch}${name}&${setSearch}${print}`)
          .then(response => response.json())
          .then(response => this.setState({ result: response.cards[0] }))
          .catch(error => error)
    }

    fetchCardByName(searchTerm) {
      this.setState({ isLoading: true })
      fetch(`${pathBase}${pathSearch}${paramSearch}${searchTerm}&contains=imageUrl`)
        .then(response => response.json())
        .then(result => this.setSearchResults(result))
        .catch(error => console.log(error))
    }


    componentDidMount() {
      const { searchTerm } = this.state;
      this.fetchCardByName(searchTerm);
      this.fetchLocalStorage();
    }

  render() {
    const { searchTerm, result, storage, isLoading } = this.state;

    const cardWrapper = {
      position: 'relative',
      width: '300px',
      height: '500px',
  }
    const spinnerWrapper = {
      position: 'absolute',
      top: '50%',
      left: '50%',
      marginLeft: 'auto',
      marginRight: 'auto', 
      transform: 'translate(-50%,-50%)', 
      color: 'orange',
  }
    
    if (isLoading) {
      return (
        <div className="row h-100">
          <div className="col-sm-12 my-auto">
            <div className="spinner-border d-block mx-auto" role="status">
            </div>
          </div>
        </div>
      )
  };


    return (
      <React.Fragment>
        <NavBar
          value={searchTerm}
          onChange={this.handleSearchChange}
          onSubmit={this.handleSearchSubmit}
          storage={storage}
        />
        <main className="container">
          {result ? <Table result={result} 
          storage={storage} onClick={this.handleButtonClick} 
          removeCard={this.removeCard} getCardBySet={this.getCardBySet}
          /> : <p>Card not found.</p>}
          
        </main>
      </React.Fragment>
      
    );
  }
}

export default App;
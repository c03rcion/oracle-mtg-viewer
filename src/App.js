import React, { Component } from 'react';
import './App.css';
import NavBar from './components/navbar';
import Table from './components/table';


const pathBase = "https://api.magicthegathering.io/v1";
const pathSearch = "/cards";
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
      console.log(this.state.count);
    }

    handleButtonClick = () => {
      const { result } = this.state;
      localStorage.setItem(result.name, JSON.stringify(result));
      this.fetchLocalStorage();
    }

    handleSearchChange = event => {
      const searchTerm = event.target.value;
      this.setState({ searchTerm: searchTerm });
      console.log(this.state.searchTerm)
    }

    handleSearchSubmit = event => {
      const { searchTerm } = this.state;
      this.fetchCardByName(searchTerm);
      event.preventDefault();
    }

    setSearchResults = result => {
      this.setState({ result: result.cards[0] })
    }

    fetchCardByName(searchTerm) {
      console.log(`${pathBase}${pathSearch}${paramSearch}${searchTerm}&contains=imageUrl`)
      fetch(`${pathBase}${pathSearch}${paramSearch}${searchTerm}&contains=imageUrl`)
        .then(response => response.json())
        .then(result => this.setSearchResults(result))
        .catch(error => this.setState({ error: error }));
    }


    componentDidMount() {
      const { searchTerm } = this.state;
      this.fetchCardByName(searchTerm);
      this.fetchLocalStorage();
    }

  render() {
    const { searchTerm, result, storage } = this.state;
    return (
      <React.Fragment>
        <NavBar
          value={searchTerm}
          onChange={this.handleSearchChange}
          onSubmit={this.handleSearchSubmit}
          storage={storage}
        />
        <main className="container">
          {result ? <Table result={result} storage={storage} onClick={this.handleButtonClick} removeCard={this.removeCard} /> : null}
          
        </main>
      </React.Fragment>
      
    );
  }
}

export default App;

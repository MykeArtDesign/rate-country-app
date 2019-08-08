import React, { Component } from 'react';
import SearchBar from '../containers/SearchBar'
import RateExchangeList from '../containers/RateExchangeList';

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar/>
        <RateExchangeList />
      </div>
    );
  }
}

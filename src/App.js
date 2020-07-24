import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import mockObject from './misc/mockApiData';
import Card from '../src/models/Card';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      data: mockObject
    }
  }

  render() {
    return (
      <div class="container">
        <h1 class="text-muted">Users</h1>
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 gutters-sm">
        {this.state.data.members.map((user) => (
            <Card member={user}/>
        ))}
      </div>
      </div>
    );
  }
}

export default App;

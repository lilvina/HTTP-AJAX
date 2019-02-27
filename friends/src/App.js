import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Friends from './components/Friends'
import FriendForm from './components/FriendForm'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      friends: [],

    }
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(res => {
        console.log(res)
        this.setState({ friends: res.data})
      })
      .catch(err => {
        console.log(err)
        this.setState({ error: err })
      })

  }

  friendDelete = e => {
    console.log(e.target.value)
    axios
      .delete(`http://localhost:5000/friends/${e.target.value}`)
      .then(res => console.log(res.data))
      window.location.reload()
  }

  render() {
    return (
      <div className="App">
        <h1>Lists of friends</h1>
        <FriendForm />
        {this.state.friends.map(friend => {
          return (
            <Friends {...friend} key={friend.id} friendDelete={this.friendDelete} />
          )
        })}

      </div>
    );
  }
}

export default App;

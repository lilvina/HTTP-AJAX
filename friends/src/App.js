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
      name: '',
      age: '',
      email: ''
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

  handleFriends = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmit = e => {
    e.preventDefault()

    const addFriends = {
      name: this.state.name,
      age: this.state.age,
      email: this.state.email
    }
    axios
      .post('http://localhost:5000/friends', addFriends)
      .then(res => {
        this.setState({
          friends: res.data
        })
      })
      .catch(err => console.log(err))
  }

  formReset = e => {
    e.preventDefault()
    this.setState({ name: '', age: '', email: '' })
  }

  friendDelete = e => {
    console.log(e.target.value)
    axios
      .delete(`http://localhost:5000/friends/${e.target.value}`)
      .then(res => this.setState({
        friends: res.data
      }))
      .catch(err => console.log(err))
      //window.location.reload()
  }

  render() {
    return (
      <div className="App">
        <h1>Lists of friends</h1>
        <FriendForm
          onSubmit={this.onSubmit}
          name={this.state.name}
          age={this.state.age}
          email={this.state.email}
          onChange={this.handleFriends}
          handleFriends={this.handleFriends}
          formReset={this.formReset}
          />
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

import React, {Component} from 'react';
import axios from 'axios';

class FriendForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      age: '',
      email: ''
    }
  }

  handleFriends = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmit = e => {
    axios
      .post('http://localhost:5000/friends', this.state)
      .then(res => {
        console.log(res)
        console.log(res.data)
      })
  }

  formReset = e => {
    e.preventDefault()
    this.setState({ name: '', age: '', email: '' })
  }

  render() {
    return (
      <form className="friend" onSubmit={this.onSubmit}>
        <input onChange={this.handleFriends} name="name" type="text" placeholder="name" value={this.state.name} required />

        <input onChange={this.handleFriends} name="age" type="text" placeholder="age" value={this.state.age} required />

        <input onChange={this.handleFriends} name="email" type="text" placeholder="email" value={this.state.email} required />

        <input type="submit" value="value" />
        <input type="reset" onClick={this.formReset}/>

      </form>
    )
  }
}

export default FriendForm;

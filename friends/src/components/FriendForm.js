import React from 'react';

const FriendForm = props => {
  return (
    <form className="friend" onSubmit={props.onSubmit}>
      <input onChange={props.handleFriends} name="name" type="text" placeholder="name" value={props.name} required />

      <input onChange={props.handleFriends} name="age" type="text" placeholder="age" value={props.age} required />

      <input onChange={props.handleFriends} name="email" type="text" placeholder="email" value={props.email} required />

      <input type="submit" value="value" />
      <input type="reset" onClick={props.formReset}/>

    </form>
  )
}

export default FriendForm;

import React from 'react';

const Friends = props => {
  return (
    <div className="friend-display" key={props.id}>
      <h3>{props.name}</h3>
      <p>{props.age}</p>
      <p>{props.email}</p>
      <button onClick={props.friendDelete} value={props.id}>Go Away</button>
    </div>
  )
}

export default Friends;

import React from 'react';

const Friends = props => {
  return (
    <div className="friend-display" key={props.id}>
      <h3>{props.name}</h3>
      <p>{props.age}</p>
      <p>{props.email}</p>
    </div>
  )
}

export default Friends;

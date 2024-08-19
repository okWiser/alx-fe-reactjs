import React from 'react';

const UserProfile = (props) => {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>Age: {props.age}</p>
      <p>Bio: {props.bio}</p>
    </div>
  );
  <div style={{ border: '1px solid gray', padding: '10px', margin: '10px' }}>
    <h2 style={{ fontSize: '24px', color: 'blue', marginBottom: '10px' }}>{props.name}</h2>
    <p style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '5px' }}>Age: <span>{props.age}</span></p>
    <p style={{ fontSize: '16px', marginBottom: '5px' }}>Bio: {props.bio}</p>
  </div>
};

export default UserProfile;

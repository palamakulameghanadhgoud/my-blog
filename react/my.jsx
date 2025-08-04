import React, { useState } from 'react';

function Welcome(props) { 
  return <h1>Hello, {props.name}</h1>; 
} 

function Counter() { 
  const [count, setCount] = useState(0); 
  return ( 
    <div> 
      <p>You clicked {count} times</p> 
      <button onClick={() => setCount(count + 1)}>Click me</button> 
    </div> 
  ); 
} 

class WelcomeClass extends React.Component { 
  render() { 
    return <h1>Hello, {this.props.name}</h1>; 
  } 
}
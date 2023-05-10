import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App1 from './App1';
ReactDOM.render(<App1/>, document.getElementById('root'));
// const fullname=['vinod','thapa'];
// const biodata=[1,...fullname,26,'male'];
// console.log(fullname);
// console.log(biodata);
const fullname={
  fname:'vinod',
  lname:'thapa',
}; 
const biodata={
  id:1,
  ...fullname,
  age:26,
  gender:'male',
};
console.log(biodata);
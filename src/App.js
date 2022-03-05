import React from 'react';
import './App.css';
import ObjectUseState from './components/Immutable State/ObjectUseState';
import ObjectUseState2 from './components/Immutable State/ObjectUseState2';
import UseReducer from './components/UseReducer/UseReducer';
import UseState from './components/UseState/UseState';

function App() {
  return (
    <div className='App'>
      <UseState />
      <br />
      <UseReducer />
      <br />
      <ObjectUseState />
      <br />
      <ObjectUseState2 />
    </div>
  );
}

export default App;

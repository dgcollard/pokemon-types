import React from 'react';
import bem from 'bem-cn';
import TypeChart from './TypeChart';
import Generation6Types from './Generation6Types';
import './App.css';

const block = bem('app');

const App = () => (
  <div className={block()}>
    <TypeChart types={Generation6Types} />
  </div>
);

export default App;

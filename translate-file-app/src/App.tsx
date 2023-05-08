import { useState } from 'react';

import './App.css';
import TopBar from './components/top-bar';
import Login from './components/log';
import Algorithm from './components/Algo/algorithm';

function App() {
  return (
    <div className="">
      {/* <TopBar /> */}
      {/* <Login /> */}
      <Algorithm />
    </div>
  );
}

export default App;

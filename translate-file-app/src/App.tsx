import { useState } from 'react';

import './App.css';
import TopBar from './components/top-bar';
import Login from './components/log';

function App() {
  return (
    <div className="flex w-full h-screen ">
      <TopBar />
      <Login />
    </div>
  );
}

export default App;

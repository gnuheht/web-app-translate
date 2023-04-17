import { useState } from 'react';

import './App.css';
import TopBar from './components/top-bar';
import Login from './components/log';

function App() {
  return (
    <div className="flex w-full h-screen bg-[#f5f5f5]">
      <TopBar />
      <Login />
    </div>
  );
}

export default App;

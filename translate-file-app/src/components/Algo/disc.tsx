import { useState } from 'react';
import './disc.css';
function Disc({ num, active }: any) {
  return (
    <div
      className={`disc ${active ? 'active' : ''}`}
      style={{ width: num * 50 }}
    >
      {num}
    </div>
  );
}

export default Disc;

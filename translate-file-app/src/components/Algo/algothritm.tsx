import { useState, useEffect } from 'react';
import './disc.css';
import Disc from './disc';
function Algothritm() {
  let box = [[1, 2, 3, 4, 5], [], []];
  const [select, setSelect] = useState(-1);

  const handleOnClick = (num: number) => {
    console.log('num', num);
    if (select === -1) {
      console.log('num');
      setSelect(num);
    }
  };

  const moveSelected = (selected: number, target: number) => {
    const selectedTower = box[selected][0] || Infinity;
    const targetTower = box[target][0] || Infinity;
    if (selectedTower < targetTower) {
      box[selected].shift();
      box[target].unshift(selectedTower);
    }
  };

  const doOnclick = (a: number) => {
    handleOnClick(a);
    moveSelected(select, a);
    setSelect(-1);
  };

  return (
    <div className="main">
      {box.map((i, index) => (
        <div className="column" onClick={() => doOnclick(index)} key={index}>
          {i.map((a, index) => (
            <Disc
              key={index}
              num={a}
              active={select === index && index === 0}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export default Algothritm;

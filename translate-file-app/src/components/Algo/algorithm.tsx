import { useState, useEffect } from 'react';
import './disc.css';
import Disc from './disc';
function Algorithm() {
  let box = [[1, 2, 3, 4, 5], [], []];
  const [select, setSelect] = useState(-1);

  const handleOnClick = (num: number) => {
    console.log('num', num);
    if (select === -1) {
      console.log('num ', num);
      setSelect(num);
    }

    if (select === num) {
      console.log('num ', num);
      setSelect(num);
    }
  };

  const moveSelected = (selected: number, target: number) => {
    const selectedTower = box[selected][0] || Infinity;
    const targetTower = box[target][0] || Infinity;
    console.log('box select', box[selected]?.[0]);
    console.log('box target', box[target][0]);
    if (selectedTower < targetTower) {
      box[selected]?.shift();
      box[target]?.unshift(selectedTower);
    }
  };

  const doOnClick = (a: number) => {
    handleOnClick(a);
    moveSelected(select, select);
    setSelect(-1);
  };

  return (
    <div className="main">
      {box.map((i, index) => (
        <div
          className="column"
          onClick={() => doOnClick(index)}
          key={index}
          style={{ '--theme-color': '#000' }}
        >
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

export default Algorithm;

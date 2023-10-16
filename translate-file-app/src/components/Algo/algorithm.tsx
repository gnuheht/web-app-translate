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
      return;
    }

    if (select === num) {
      console.log('num ', num);
      setSelect(num);
      return;
    }
    moveSelected(select, num);
    setSelect(-1);
  };

  const moveSelected = (selected: number | any, target: number | any) => {
    console.log('selected : ', selected);
    const selectedTower = box?.[selected]?.[0] || Infinity;
    console.log(box[0][0]);
    const targetTower = box?.[target]?.[0] || Infinity;
    console.log('box select', box[selected]?.[0] || Infinity);
    console.log('box target', box[target]?.[0] || Infinity);
    box.map((i) => console.log(i));
    if (selectedTower < targetTower) {
      box?.[selected].shift();
      box?.[target].unshift(selectedTower);
      box.map((i) => console.log(i));
    }
    setSelect(-1);
  };

  // const doOnClick = (a: number) => {
  //   handleOnClick(a);
  //   ;
  // };

  return (
    <div className="main">
      {console.log('re-render')}
      {box.map((i, index) => (
        <div
          className="column"
          onClick={() => handleOnClick(index)}
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

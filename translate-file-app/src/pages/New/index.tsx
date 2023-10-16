import React from 'react';
import NewLeft from './new-left';
import NewRight from './new-right';
import NewMain from './new-main';

const New = () => {
  return (
    <div className="container">
      <div className="w-9/12 ">
        <div className="w-full flex flex-row">
          <div>
            <NewLeft />
          </div>
          <div>
            <NewMain />
          </div>
          <div>
            <NewRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;

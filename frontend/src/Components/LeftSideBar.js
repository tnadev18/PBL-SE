import React, { useState } from 'react';
import clubs from '@/data/clubs';
const ClubList = (props) => {
  const [numClubs, setNumClubs] = useState(5);

  const visibleClubs = clubs.slice(0, numClubs);

  const handleSeeMoreClick = () => {
    setNumClubs(numClubs + 5);
  };

  return (
    <div className="column-left desktop-tablet-only">
      <div className="fixed-area">
        <ul className="menus">
          <button>
          <li className="menu-page-item">
            <img src={props.myProps.img} />
            <div>
              <span>{props.myProps.name}</span>
              <div className="new-info">
                <span className="dot"></span>
                <span>{Math.floor(Math.random()*5)}</span>
              </div>
            </div>
          </li>
          </button>
        </ul>
      </div>
    </div>
  );
};

export default ClubList;


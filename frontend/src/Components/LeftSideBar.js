import React, { useState } from 'react';

const ClubList = () => {
  const [numClubs, setNumClubs] = useState(5);

  const clubs = [
    { img: 'https://aissmsioit.org/wp-content/uploads/2023/03/aisa001.png', name: 'ML Club', new: 5 },
    { img: 'https://aissmsioit.org/wp-content/uploads/2023/03/aisa002.png', name: 'I-Bot', new: 0 },
    { img: 'https://aissmsioit.org/wp-content/uploads/2023/03/CodeClub1.png', name: 'Coding Club', new: 2 },
    { img: 'https://aissmsioit.org/wp-content/uploads/2023/03/DroneClub1.png', name: 'Drone Club', new: 1 },
    { img: 'https://aissmsioit.org/wp-content/uploads/2023/03/ElectronicInnovationClub1.png', name: 'Electronics Innovation Club', new: 0 },
    { img: 'https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2,f_auto,g_center,q_auto:good/v1/gcs/platform-data-dsc/events/small-logo.png', name: 'Google Developer Student Clubs', new: 3 },
    { img: 'https://aissmsioit.org/wp-content/uploads/2023/03/IOITFilmClub1.png', name: 'IOIT Film Club', new: 0 },
    { img: 'https://aissmsioit.org/wp-content/uploads/2023/03/KalakariClub1.png', name: 'Kalakari club', new: 0 },
    { img: 'https://aissmsioit.org/wp-content/uploads/2023/03/NationalServiceScheme1.png', name: 'National Service Scheme', new: 0 },
    { img: 'https://aissmsioit.org/wp-content/uploads/2023/03/MLSA-Club1.png', name: 'Microsoft Learn Student Ambassadors Club', new: 0 },
    { img: 'https://aissmsioit.org/wp-content/uploads/2023/03/KalakariClub1.png', name: 'Kalakari club', new: 0 }
  ];

  const visibleClubs = clubs.slice(0, numClubs);

  const handleSeeMoreClick = () => {
    setNumClubs(numClubs + 5);
  };

  return (
    <div className="column-left desktop-tablet-only">
    <div className="fixed-area">
      <ul className="menus">
        <li className="menu-page-item">
          <img src="https://aissmsioit.org/wp-content/uploads/2023/03/aisa001.png" />
          <div>
            <span>ML Club</span>
            <div className="new-info">
              <span className="dot"></span>
              <span>5 new</span>
            </div>
          </div>
        </li>
        <li>
          <img src="https://aissmsioit.org/wp-content/uploads/2023/03/aisa002.png" />
          <span>I-Bot</span>
        </li>
        <li>
          <img src="https://aissmsioit.org/wp-content/uploads/2023/03/CodeClub1.png" />
          <span>Coding Club</span>
        </li>
        <li>
          <img src="https://aissmsioit.org/wp-content/uploads/2023/03/DroneClub1.png" />
          <span>Drone Club</span>
        </li>
        <li>
          <img src="https://aissmsioit.org/wp-content/uploads/2023/03/ElectronicInnovationClub1.png" />
          <span>Electronics Innovation Club</span>
        </li>
        <li>
          <img src="https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2,f_auto,g_center,q_auto:good/v1/gcs/platform-data-dsc/events/small-logo.png"/>
          <span>Google Developer Student Clubs</span>
        </li>
        <li>
          <img src="https://aissmsioit.org/wp-content/uploads/2023/03/IOITFilmClub1.png" />
          <span>IOIT Film Club</span>
        </li>
        <li>
          <img src="https://aissmsioit.org/wp-content/uploads/2023/03/KalakariClub1.png" />
          <span>Kalakari club</span>
        </li>
        <li>
          <img src="https://aissmsioit.org/wp-content/uploads/2023/03/NationalServiceScheme1.png" />
          <span>National Service Scheme</span>
        </li>
        <li>
          <img src="https://aissmsioit.org/wp-content/uploads/2023/03/MLSA-Club1.png" />
          <span>Microsoft Learn Student Ambassadors Club</span>
        </li>
        <li>
          <img src="https://aissmsioit.org/wp-content/uploads/2023/03/KalakariClub1.png" />
          <span>Kalakari club</span>
        </li>
      </ul>
        <button id='next'>
          <div className="action-button-3"><i className="chevron-bottom-icon"></i></div>
          <span>See More</span>
        </button>
        </div>
  </div>
  );
};

export default ClubList;


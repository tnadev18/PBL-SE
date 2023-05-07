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
    <div className="club-list">
      {visibleClubs.map((club, index) => (
        <div className="club-item" key={index}>
          <img src={club.img} alt={club.name} />
          <div>
            <span>{club.name}</span>
            {club.new > 0 && (
              <div className="new-info">
                <span className="dot"></span>
                <span>{club.new} new</span>
              </div>
            )}
          </div>
        </div>
      ))}
      {numClubs < clubs.length && (
        <button className="see-more-button" onClick={handleSeeMoreClick}>See More</button>
      )}
    </div>
  );
};

export default ClubList;
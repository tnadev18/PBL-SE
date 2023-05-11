import Navbar from "@/Components/Navbar"
import Image from "next/image"
import Post from "@/Components/Post"
import RightSideBar from "@/Components/LeftSideBar"
import LeftSideBar from "@/Components/RightSideBar"
import NewPost from "@/Components/NewPost"

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

export default function Index() {
  return (
    <main>
      <Navbar />
      <div className="content-grid">
        <div className="leftBar">
          {clubs.map(element => <RightSideBar myProps={element} />)}
        </div>
        <div>
          {clubs.map((element) => { return <Post myProps={element} /> })}
        </div>
        <LeftSideBar />
        <NewPost />
      </div>
    </main>
  )
}

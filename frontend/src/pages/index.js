import Navbar from "@/Components/Navbar"
import Image from "next/image"
import Post from "@/Components/Post"
import RightSideBar from "@/Components/LeftSideBar"
import LeftSideBar from "@/Components/RightSideBar"
import NewPost from "@/Components/NewPost"
import clubs from "@/data/clubs"

export default function Index() {
  const clubList = clubs.map(element => <RightSideBar myProps={element} key={element.name} />)
 
  return (
    <main>
      <Navbar />
      <div className="content-grid">
        <div className="leftBar">
          {clubList}
        </div>
        <div>
          {clubs.map((element) => { return <Post myProps={element} key={element.name} /> })}
        </div>
        <LeftSideBar />
        <NewPost />
      </div>
    </main>
  )
}

import Navbar from "@/Components/Navbar"
import Image from "next/image"
import Post from "@/Components/Post"
import RightSideBar from "@/Components/RightSideBar"
import LeftSideBar from "@/Components/LeftSideBar"
import NewPost from "@/Components/NewPost"


export default function Index(){
  return (
    <main>
    <Navbar/>
    <div className="content-grid">
      <RightSideBar/>
      <Post/>
      <LeftSideBar/>
      <NewPost/>
    </div>
    </main>
  )
}

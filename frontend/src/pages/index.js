import Navbar from "@/Components/Navbar"
import Image from "next/image"
import Post from "@/Components/Post"
import LeftSideBar from "@/Components/LeftSideBar"

import NewPost from "@/Components/NewPost"
import clubs from "@/data/clubs"
import { useState } from "react"

export default function Index() {

  const [content,setContent] = useState({})

  const clubList = clubs.map(element => <LeftSideBar myProps={element} key={element.name} func={setContent} />)

  return (
    <main>
      <Navbar />
      <div className="content-grid">
        <div className="leftBar">
          {clubList}
        </div>
        <div>
          {clubs.map((element) => { return <Post myProps={content} key={element.name} crop={element}/> })}
        </div>

        <NewPost />
      </div>
    </main>
  )
}

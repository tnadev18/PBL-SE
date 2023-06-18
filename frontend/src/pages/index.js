import Navbar from "@/Components/Navbar"
import Post from "@/Components/Post"
import LeftSideBar from "@/Components/LeftSideBar"

import NewPost from "@/Components/NewPost"
import clubs from "@/data/clubs"
import { useState } from "react"

export default function Index() {

  const [content,setContent] = useState([])
  const [state,setState] = useState(true)

  const clubList = clubs.map(element => <LeftSideBar myProps={element} key={element.name} func={setContent} bool={setState} />)

  const arr = content.map(x=><Post myProps={x} key = {x.name} crop={x} />)

  return (
    <main>
      <Navbar />
      <div className="content-grid">
        <div className="leftBar">
          {clubList}
        </div>
        <div>
          {state ? clubs.map((element) => { return <Post myProps={content} key={element.name} crop={element}/> }):arr}
        </div>

        <NewPost />
      </div>
    </main>
  )
}

import React, { useState } from 'react'
import image1 from '../images/content/346455760_1040391420271689_1732806197730749739_n.png'
import clubs from '@/data/clubs'

function Post(props) {

  const [likes, updateLikes] = useState(Math.floor(Math.random() * 10))

  function handleClick() {
    updateLikes(likes + 1)
  }
  const imgLink = props.myProps.img || props.crop.img
  const title = props.myProps.name || props.crop.name
  // console.log(props.myProps)
  return (
    <div className='container'>
      <div className="column-center">
        <div className="content-area">

          <div className="card post">
            <div className="post-header">
              <div className="post-author-info">
                <img src={imgLink} />
                <div>
                  <div>
                    <span className="author-name">{title}</span>
                    <i className="verified-icon"></i>
                  </div>
                  <div className="details">
                    <span>{Math.floor(Math.random() * 12 + 1)}h</span>
                    <span> · </span>
                    <i className="post-settings-icon"></i>
                  </div>
                </div>
              </div>
              <i className="post-menu-icon"></i>
            </div>
            <p className="post-body">{props.myProps.postData || props.crop.postData}</p>
            <a className="post-image">

              <img src={props.myProps.eventImg || props.crop.eventImg} height={10} width={100} />

            </a>
            <div className="post-reactions">
              <div className="reactions">

                <span>{likes} likes</span>
              </div>
              <div className="comment-share">
                <div>
                  <span>{Math.floor(Math.random() * 10)}</span>
                  <span>Comments</span>
                </div>
                <div className="shares">
                  <span>{Math.floor(Math.random() * 10)}</span>
                  <span>Shares</span>
                </div>
              </div>
            </div>
            <div className="post-actions">
              <div className="actions">
                <div className="action">
                  <button onClick={handleClick}><i className="like-icon"></i></button>
                  <span>Like</span>
                </div>

                <div className="action">
                  <i className="share-icon"></i>
                  <span>Share</span>
                </div>
              </div>
              <div className="interact-as">
                <img src="images/profile-40.jpg" />
                <i className="dropdown-icon-small"></i>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )

}

export default Post
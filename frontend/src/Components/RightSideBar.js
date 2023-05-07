import React from 'react'

const LeftSideBar = () => {
  return (
    <>
    <div className="column-right  desktop-tablet-only">
    <div className="fixed-area">
      <div className="sponsored">
        <span className="title">My Clubs</span>
        <div className="sponsor-list">
          <div className="sponsor-item">
            <img src="images/sponsor-1.jpg" />
            <div className="sponsor-info">
              <span>Create your perfect video</span>
              <div>artlist.io</div>
            </div>
          </div>
          <div className="sponsor-item">
            <img src="images/sponsor-2.jpg" />
            <div className="sponsor-info">
              <span>Create your perfect video</span>
              <div>artlist.io</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </>
  )
}

export default LeftSideBar
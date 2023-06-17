import React, { useState } from 'react';
import clubs from '@/data/clubs';
import { useRouter } from 'next/router';
import Link from 'next/link';
const ClubList = (props) => {

  const route = `/subPages/${props.myProps.route}`


  function handleClick() {
    props.func(props.myProps)
  }

  return (
    <div className="column-left desktop-tablet-only">
      <div className="fixed-area">
        <ul className="menus">
          {/* <Link href={route}> */}
          <button onClick={handleClick}>
            <li className="menu-page-item">
              <img src={props.myProps.img} />
              <div>
                <span>{props.myProps.name}</span>
                <div className="new-info">
                  <span className="dot"></span>
                  <span>{Math.floor(Math.random() * 5)}</span>
                </div>
              </div>
            </li>
          </button>
          {/* </Link> */}
        </ul>
      </div>
    </div>
  );
};

export default ClubList;


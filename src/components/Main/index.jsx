import React from 'react';
import {Container} from "./style";
import Post from "../Main/Post"
import Feed from "../Main/Feed"
import Feeds from "../Main/Feed/Feeds"

export default function Main() {
  return (
    <Container>
      {/* <div className="navbar">
        <h2>Navbar</h2>
      </div> */}
      <Post
        name={"Kristofer"}
        addFeed={Feeds.addFeed}
        >

      </Post>
      <Feed></Feed>
    </Container>
  )
}

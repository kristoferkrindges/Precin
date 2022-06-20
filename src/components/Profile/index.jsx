import React from 'react';
import { useParams } from 'react-router-dom';
import Menu from '../Shared/Menu';

function Profile() {
  let { username } = useParams();
  return (
    <>
        <Menu></Menu>
        <div>This is the profile page for {username}!</div>
    </>
  )
}

export default Profile
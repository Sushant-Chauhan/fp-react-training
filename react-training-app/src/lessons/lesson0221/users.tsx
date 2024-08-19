import React from "react";
import { Link } from "react-router-dom";

const Users = () => {
  return (
    <>
      <h2>Users</h2>
      <ul>
        <p>Try to click on both links and look at changes in the url</p>
        <li>
          {/* with "/" character at the beginning */}
          <Link to="/settings">This link has an absolute path</Link>
        </li>
        <li>
          {/* no "/" character at the beginning 
          this link is rendered in a <Route> component that matches a path ("/users")
          so the path specified in our <Link> will just append to the current path */}
          <Link to="settings">This link has a relative path</Link>
        </li>
      </ul>
    </>
  );
};

export default Users;

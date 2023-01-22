import React from "react";

function Users({ user }) {
  return (
    <>
      <p>{user.name}</p>
      <h4>{user.email}</h4>
    </>
  );
}

export default Users;

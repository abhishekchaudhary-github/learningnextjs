import React from "react";
import Users from "../components/users";

function users({ users }) {
  return (
    <>
      <div>users</div>
      {users.map((user) => {
        return (
          <div key={user.id}>
            <Users user={user} />
          </div>
        );
      })}
    </>
  );
}

export default users;

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  console.log(data);

  return {
    props: {
      users: data,
    },
  };
}

import React from "react";

function users({ users }) {
  return (
    <>
      <div>users</div>
      {users.map((user) => {
        return (
          <div key={user.id}>
            <p>{user.name}</p>
            <h4>{user.email}</h4>
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

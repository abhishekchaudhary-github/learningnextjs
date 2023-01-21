import React from "react";

function users({ users }) {
  return (
    <>
      <div>users</div>
      <div key={users.id}>
        <p>{users.username}</p>
        <h4>{users.email}</h4>
      </div>
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

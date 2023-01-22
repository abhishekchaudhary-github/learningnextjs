import React from "react";

function posts({ users }) {
  return (
    <div>
      <h1>{users.title}</h1>
      <p>{users.body}</p>
    </div>
  );
}

export default posts;
export async function getStaticProps(context) {
  const { params } = context;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );
  const data = await response.json();
  return {
    props: {
      users: data,
    },
  };
}

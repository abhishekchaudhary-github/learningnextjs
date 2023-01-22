import React from "react";
import users from "../users";
import Link from "next/link";

function index({ users }) {
  return (
    <div>
      {users.map((user) => {
        return (
          <Link href={`/posts/${user.id}`}>
            <p>{user.title}</p>
          </Link>
        );
      })}
    </div>
  );
}

export default index;

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  return {
    props: {
      users: data,
    },
  };
}

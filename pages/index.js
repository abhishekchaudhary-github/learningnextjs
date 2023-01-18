import React from "react";
import Link from "next/link";
function Home() {
  return (
    <>
      <div>Home page</div>
      <Link legacyBehavior href="/blog">
        <a>Blog</a>
      </Link>
      <Link legacyBehavior href="/product">
        <a>Product</a>
      </Link>
    </>
  );
}

export default Home;

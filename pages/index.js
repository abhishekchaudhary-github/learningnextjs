import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
function Home() {
  const router = useRouter();
  return (
    <>
      <div>Home page</div>
      <Link legacyBehavior href="/blog">
        <a>Blog</a>
      </Link>
      <Link legacyBehavior href="/product">
        <a>Product</a>
      </Link>
      <p
        onClick={() => {
          router.replace("/product");
        }}
      >
        place an order
      </p>
    </>
  );
}

export default Home;

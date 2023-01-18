import React from "react";
import { useRouter } from "next/router";

function Review() {
  const x = useRouter();
  const y = x.query.id;
  return (
    <div>
      Review {y} of product {x.query.x}
    </div>
  );
}

export default Review;

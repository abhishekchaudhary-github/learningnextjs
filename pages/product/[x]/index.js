import React from "react";
import { useRouter } from "next/router";
function SpeProduct() {
  const x = useRouter();
  const y = x.query.x;
  return <div>Product number {y}</div>;
}

export default SpeProduct;

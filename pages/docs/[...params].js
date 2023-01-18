import React from "react";
import { useRouter } from "next/router";

function Docs() {
  const router = useRouter();
  const { params } = router.query;
  console.log(params);
  return <div>Docs</div>;
}

export default Docs;

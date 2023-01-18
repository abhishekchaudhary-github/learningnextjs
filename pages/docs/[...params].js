import React from "react";
import { useRouter } from "next/router";

function Doc() {
  const router = useRouter();
  const { params = [] } = router.query;
  if (params.length === 2)
    return (
      <div>
        Docs {params[0]} and {params[1]}
      </div>
    );
  else if (params.length === 1) return <div>Docs {params[0]}</div>;
  return <div>Many elements</div>;
}

export default Doc;

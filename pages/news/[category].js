import React from "react";

function Cat({ data }) {
  return (
    <>
      <div>sub-head</div>
      {data.map((obje) => {
        return (
          <div key={obje.id}>
            <h1>{obje.category}</h1>
            <h2>{obje.id}</h2>
          </div>
        );
      })}
    </>
  );
}

export async function getServerSideProps(context) {
  const { params, req, res, query } = context;
  const dat = await fetch(
    `http://localhost:4000/news?category=${params.category}`
  );
  const data = await dat.json();
  res.setHeader("Set-Cookie", "name=khan");
  console.log(req.headers.cookies);
  return {
    props: {
      data,
    },
  };
}

export default Cat;

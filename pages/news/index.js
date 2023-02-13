import React from "react";

function index({ articles }) {
  return (
    <>
      <div>Heading</div>
      {articles.map((obje) => {
        return (
          <div key={obje.id}>
            <h1>{obje.category}</h1>
          </div>
        );
      })}
    </>
  );
}

export async function getServerSideProps() {
  const data = await fetch("http://localhost:4000/news");
  const jso = await data.json();
  return {
    props: {
      articles: jso,
    },
  };
}

export default index;

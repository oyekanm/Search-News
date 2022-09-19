import React from "react";

function HackerNews({ hits, filterBtn }) {
  if (hits.length < 1) {
    return <p className="title container">no news is related to your search</p>;
  }
  return (
    <>
      <div className="rows">
        {hits.map((hit) => {
          const { objectID, title, url, author, num_comments, points } = hit;

          return (
            <div key={objectID} className="Hits">
              <p className="Hits__title">{title}</p>
              <p className="Hits__info">
                {points}points by {author} | {num_comments}{" "}
                {num_comments > 1 ? "comments" : "comment"}
              </p>
              <a href={url} className="bttn" target="_blank">
                read more
              </a>
              <button
                className="btn__remove"
                onClick={() => filterBtn(objectID)}
              >
                remove
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default HackerNews;

import React from "react";

const Card = ({
  Title,
  Poster,
  key,
  imdbID,
  history
}) => {
  return (
    <div className="card p-4 mb-4" style={{ 
      border: 'solid 1px black'
   }} key={key}>
      <div className="card-image">
        <img
          alt={Title}
          src={Poster}
          className="img-fluid"
          style={{ width: "100%" }}
        />
      </div>
      <div className="card-body text-center">
        <div>{Title}</div>
        <button onClick={() => history.push(`/${imdbID}`)}>Go to detail</button>
      </div>
    </div>
  );
};

export default Card

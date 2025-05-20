import React from "react";
import Players2 from "../src/Share/ListOfPlayers";
import "./Players.css"
export default function Players() {
  return (
    <div className="container">
      {Players2.map((player) => (
        <div className="column" key={player.id}>
          <div className="card w-5">
            <img src={player.img} />
            <h3>{player.name}</h3>
            <p className="title">{player.club}</p>
            <p>
              <button>Detail</button>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

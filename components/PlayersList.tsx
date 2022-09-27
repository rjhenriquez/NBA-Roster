import React from "react";
import PlayerCard from "./PlayerCard";

const PlayersList = (props) => {
  const teamsSorted = {};
  for (let i = 0; i < props.teams.length; i++) {
    teamsSorted[props.teams[i].ta] = props.teams[i];
  }

  return (
    <section className="bg-slate-100 p-4 md:p-5 lg:p-7">
      <ul className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-7">
        {props.players.map((player) => {
          // Get the players current team
          let currentTeam = teamsSorted[player.ta];
          return (
            <PlayerCard
              key={player.pid}
              headImage={player.headshot}
              number={player.num}
              position={player.pos}
              firstName={player.fn}
              lastName={player.ln}
              ppg={player.pts}
              rpg={player.reb}
              apg={player.ast}
              team={currentTeam.name}
              teamColor={currentTeam.color}
              logo={currentTeam.logo}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default PlayersList;

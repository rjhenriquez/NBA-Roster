import type { NextPage } from "next";
import React, { useEffect, useState } from "react";
import Loading from "../components/Loading/Loading";
import PlayersList from "../components/PlayersList";

const Home: NextPage = () => {
  const [players, setPlayers] = useState([]);
  const [teams, setTeams] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setError(null);
    const fetchData = async () => {
      try {
        // Fetching Players
        const playersRes = await fetch("/api/players");
        if (!playersRes.ok) {
          throw new Error("Error getting players");
        }
        const playersData = await playersRes.json();

        // Fetching Teams
        const teamsRes = await fetch("/api/teams");
        if (!teamsRes.ok) {
          throw new Error("Error getting teams");
        }
        const teamsData = await teamsRes.json();

        setPlayers(playersData);
        setTeams(teamsData);
      } catch (error) {
        setError(error.message);
      }

      setIsLoading(false);
    };
    fetchData();
  }, []);

  let content;
  if (players.length > 0 && teams.length > 0) {
    content = <PlayersList players={players} teams={teams} />;
  }
  if (error) {
    content = <p>{error}</p>;
  }
  if (isLoading) {
    content = <Loading />;
  }

  return (
    <section>
      <Loading />
    </section>
  );
};

export default Home;

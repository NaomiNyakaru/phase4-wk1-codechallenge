import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [heros, setHeros] = useState([]);

  useEffect(() => {
    fetch("/heroes")
      .then((r) => r.json())
      .then((data) => {
        console.log(data); // Check the response from the API
        setHeros(data);
      })
      .catch((error) => {
        console.error(error); // Check for errors in the API response
      });
  }, []);

  return (
    <section>
      <h2>All Heroes</h2>
      <ul>
        {Array.isArray(heros) && heros.map((hero) => (
          <li key={hero.id}>
            <Link to={`/heroes/${hero.id}`}>{hero.super_name}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Home;

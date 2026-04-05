import {useMoves} from "./service/movesApi.ts";
import Hero from "./pages/home/Hero.tsx";
import Slider from "./pages/home/Slider.tsx";
import type {moveData} from "./types/moveData.ts";
import Reviews from "./pages/home/Reviews.tsx";

function App() {
    const {moves , loading} = useMoves();
    const topRateMoves : moveData[] = moves.filter((move) => move.rating > 7    )

    // Filter Action moves
    const actionMovies: moveData[] = moves.filter((move) =>
        move.categories.some((cat) => cat.name === "Action")
    );
    //Filter Animation Moves
    const animationMovies: moveData[] = moves.filter((move) =>
        move.categories.some((cat) => cat.name === "Animation")
    );
    //Filter Animation Moves
    const romanticMovies: moveData[] = moves.filter((move) =>
        move.categories.some((cat) => cat.name === "Romantic")
    );
    return (
      <>
          <Hero />
          <Slider moves={topRateMoves} loading={loading} title="Top Rate Moves" />
          <Slider moves={romanticMovies} loading={loading} title="Romantic Moves" />
          <Slider moves={animationMovies} loading={loading} title="Animation Moves" />
          <Slider moves={actionMovies} loading={loading} title="Action Moves" />
          <Reviews />
      </>
  )
}

export default App

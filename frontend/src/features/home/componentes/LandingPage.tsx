
import { useState, useEffect } from "react";
import ListadoPeliculas from "../../peliculas/componentes/ListadoPeliculas";
import type Pelicula from "../../peliculas/modelos/peliculas.model";

export default function LandingPage() {
  const [peliculas, setPeliculas] = useState<AppState>({});

  useEffect(() => {
    const timerId = setTimeout(() => {
      const cines: Pelicula[] = [
        {
          id: 1,
          titulo: "Sonic 3",
          poster:
            "https://upload.wikimedia.org/wikipedia/en/f/f2/Sonic_the_Hedgehog_3_film_poster.jpg",
        },
        {
          id: 2,
          titulo: "John Wick: Chapter 2",
          poster:
            "https://upload.wikimedia.org/wikipedia/en/3/31/John_Wick_Chapter_Two.png",
        },
      ];

      const proximosEstrenos: Pelicula[] = [
        {
          id: 3,
          titulo: "Spider-Man: Far From Home",
          poster:
            "https://upload.wikimedia.org/wikipedia/commons/a/aa/SpidermanFH.IMG_0607.jpg",
        },
      ];

      setPeliculas({ cines, proximosEstrenos });
    }, 1000);

    return () => clearTimeout(timerId);
  }, []);

  return (
    <>
      <h3>En Cines</h3>
      <ListadoPeliculas peliculas={peliculas.cines} />
      <h3>Próximos Estrenos</h3>
      <ListadoPeliculas peliculas={peliculas.proximosEstrenos} />
    </>
  );
}

interface AppState {
  cines?: Pelicula[];
  proximosEstrenos?: Pelicula[];
}
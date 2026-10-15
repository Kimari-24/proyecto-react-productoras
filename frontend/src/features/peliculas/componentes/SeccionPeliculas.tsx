import type Pelicula from "../modelos/peliculas.model";
import ListadoPeliculas from "./ListadoPeliculas";

export default function SeccionPeliculas(props: SeccionPeliculasProps) {
  return (
    <>
      <h3>{props.titulo}</h3>
      <ListadoPeliculas peliculas={props.peliculas} />
    </>
  );
}

interface SeccionPeliculasProps {
  titulo: string;
  peliculas: Pelicula[];
}
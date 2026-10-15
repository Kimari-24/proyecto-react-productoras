import type Pelicula from "../modelos/peliculas.model";
import styles from "./PeliculaIndividual.module.css";
import { Link } from "react-router";
export default function PeliculaIndividual(props: PeliculaIndividualProps) {
 const construirLink = () => `/pelicula/${props.pelicula.id}`;
 return (
 <div className={styles.div}>
 <Link to={construirLink()}>
 <img src={props.pelicula.poster} alt="Poster" />
 </Link>
 <p>
 <Link to={construirLink()}>{props.pelicula.titulo}</Link>
 </p>
 </div>
 );
}
interface PeliculaIndividualProps {
 pelicula: Pelicula;
}


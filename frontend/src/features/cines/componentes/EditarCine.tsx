import { useEffect, useState } from "react";
import { useParams } from "react-router"
import type { SubmitHandler } from "react-hook-form";
import type CineCreacion from "../modelos/CineCreacion.model";
import FormularioCine from "./FormularioCine";
import Cargando from "../../../componentes/cargando";

export default function EditarCine() {
    const { id } = useParams();
    const [modelo, setModelo] = useState<CineCreacion | undefined>(undefined);

    useEffect(() => {
        const timerId = setTimeout(() => {
            setModelo({ nombre: 'Sambil ' + id, latitud: 18.482365, longitud: -69.912086 })
        }, 1000);

        return () => clearTimeout(timerId);
    }, [id]);

    const onSubmit: SubmitHandler<CineCreacion> = async (data) => {
        console.log('editando el cine...');
        await new Promise(resolve => setTimeout(resolve, 2000));
        console.log(data);
    }

    return (
        <>
            <h3>Editar Cine</h3>
            {modelo ? <FormularioCine modelo={modelo} onSubmit={onSubmit} /> : <Cargando />}
        </>
    )
}

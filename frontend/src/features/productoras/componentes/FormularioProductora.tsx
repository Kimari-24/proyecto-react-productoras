import { useForm, type SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { NavLink } from 'react-router';
import type ProductoraCreacion from '../modelos/ProductoraCreacion.model';
import Boton from '../../../componentes/boton';
import SeleccionarImagen from '../../../componentes/SeleccionarImagen';
import { fechaNoAnteriorA1900, fechaNoPuedeSerFutura, primeraLetraMayuscula } from '../../../validaciones/Validaciones';

interface FormularioProductoraProps {
  modelo?: ProductoraCreacion;
  onSubmit: SubmitHandler<ProductoraCreacion>;
}

const reglasDeValidacion = yup.object({
  nombre: yup
    .string()
    .required('El nombre es obligatorio')
    .test(primeraLetraMayuscula()),
  fechaFundacion: yup
    .string()
    .required('La fecha de fundación es obligatoria')
    .test({ ...fechaNoPuedeSerFutura(), message: 'La fecha no puede ser del futuro' })
    .test(fechaNoAnteriorA1900()),
  sitioWeb: yup
    .string()
    .required('El sitio web es obligatorio')
    .url('Debe ser una URL válida'),
  logo: yup.mixed<File | string>()
});

export default function FormularioProductora(props: FormularioProductoraProps) {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isValid, isSubmitting }
  } = useForm<ProductoraCreacion>({
    resolver: yupResolver(reglasDeValidacion),
    mode: 'onChange',
    defaultValues: props.modelo ?? { nombre: '', sitioWeb: '' }
  });

  const logoActual = typeof props.modelo?.logo === 'string' ? props.modelo.logo : undefined;

  return (
    <form onSubmit={handleSubmit(props.onSubmit)}>
      <div className="form-group">
        <label htmlFor="nombre">Nombre</label>
        <input type="text" id="nombre" className="form-control" {...register('nombre')} />
        {errors.nombre && <p className="error">{errors.nombre.message}</p>}
      </div>

      <div className="form-group">
        <label htmlFor="fechaFundacion">Fecha de fundación</label>
        <input type="date" id="fechaFundacion" className="form-control" {...register('fechaFundacion')} />
        {errors.fechaFundacion && <p className="error">{errors.fechaFundacion.message}</p>}
      </div>

      <div className="form-group">
        <label htmlFor="sitioWeb">Sitio web</label>
        <input type="text" id="sitioWeb" className="form-control" {...register('sitioWeb')} />
        {errors.sitioWeb && <p className="error">{errors.sitioWeb.message}</p>}
      </div>

      <SeleccionarImagen
        label="Logo"
        imagenURL={logoActual}
        imagenSeleccionada={(logo) => setValue('logo', logo)}
      />

      <div className="mt-2">
        <Boton type="submit" disabled={!isValid || isSubmitting}>{isSubmitting ? 'Enviando...' : 'Enviar'}</Boton>
        <NavLink to="/productoras" className="btn btn-secondary ms-2">Cancelar</NavLink>
      </div>
    </form>
  );
}
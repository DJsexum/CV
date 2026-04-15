export interface DatosContacto 
{
    ubicacion: string;
    correo: string;
    telefono: string;
    habilidades: string[];
    formacion: string[];
}

export interface Proyecto 
{
    puesto: string;
    descripcion: string;
    anio: string;
}

export interface Habilidad 
{
    nombre: string;
}

export interface ItemLista 
{
    titulo: string;
    subtitulo: string;
}
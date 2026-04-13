import type { DatosContacto, Proyecto } from "../core/interfaces/cv.interfaces";

export const INFORMACION_PERSONAL = 
{
    nombre: "Juan Cruz Cabrera Socin",
    profesion: "Desarrollador Web",
    descripcion: "Desarrollador web con conocimientos y uso de Astro, Tailwind y Markdown. Estudiante de programación en la UTN.",
    ubicacion: "Ceres, Santa Fe, Argentina",
    correo: "juancruzcabrerasocin@gmail.com",
    habilidades: ["Astro", "Tailwind", "Markdown", "Svelte", "TypeScript", "C", "Java", "Kali Linux"],
    formacion: ["Excel", "Seguridad en Telecomunicaciones", "Digitalización", "Programación III"]
};

export const EXPERIENCIA: Proyecto[] = 
[
    {
        puesto: "Desarrollador Frontend",
        descripcion: "Proyecto personal con Astro",
        anio: "2026"
    },
    {
        puesto: "Creación de sitios web",
        descripcion: "Diseño y desarrollo responsive",
        anio: "Actualidad"
    }
];
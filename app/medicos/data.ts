// /app/medicos/data.js
import { Doctor } from "./types"

const medicos: Doctor[] = [
  {
    id: 1,
    nombre: "Dr. Juan Pérez",
    especialidad: "Cardiología",
    descripcion: "Especialista en salud cardiovascular con amplia experiencia en...",
    imagen: "/images/doctor1.jpg",
    email: "contacto@clinica.com",
    universidadPregrado: "Medico Cirujano, Universidad Nacional de San Agustín",
    universidadEspecialidad: "Especialista en Cardiología, Universidad Nacional Mayor de San Marcos",
    maestrias: "Egresado de la Maestría en Gerencia de los Servicios de Salud, UNMSM",
    logros: "Jefe del Servicio de Hospitalización-UCI-UCIN del Instituto Nacional Cardiovascular",
    horarios: [
      { dia: "MARTES", horas: "03:00 PM-07:00 PM" },
      { dia: "MIÉRCOLES", horas: "03:00 PM-07:00 PM" },
      { dia: "JUEVES", horas: "03:30 PM-07:30 PM" },
      { dia: "VIERNES", horas: "03:00 PM-07:00 PM" },
    ]
  },
  {
    id: 2,
    nombre: "Dra. María López",
    especialidad: "Pediatría",
    descripcion: "Atención integral para niños y adolescentes.",
    imagen: "/images/doctor2.jpg",
  },
  {
    id: 3,
    nombre: "Dr. Carlos Gómez",
    especialidad: "Ginecología",
    descripcion: "Salud femenina y control preventivo.",
    imagen: "/images/doctor3.jpg",
  },
  {
    id: 4,
    nombre: "Dr. Luis Ramírez",
    especialidad: "Traumatología",
    descripcion: "Especialista en lesiones óseas y articulares.",
    imagen: "/images/doctor4.jpg",
  },
  {
    id: 5,
    nombre: "Dra. Ana Torres",
    especialidad: "Dermatología",
    descripcion: "Cuidado integral de la piel.",
    imagen: "/images/doctor5.jpg",
  },
];

export default medicos;
// servicios/data.ts
import { Servicio } from "./types";

const servicios: Servicio[] = [
  {
    id: 1,
    titulo: "Consulta Externa",
    descripcion: "Atención médica especializada para el diagnóstico y tratamiento integral de diversas patologías.",
    icono: "🩺",
  },
  {
    id: 2,
    titulo: "Laboratorio Clínico",
    descripcion: "Análisis de alta precisión con tecnología de vanguardia para resultados rápidos y confiables.",
    icono: "🔬",
  },
  {
    id: 3,
    titulo: "Emergencias 24/7",
    descripcion: "Atención inmediata y especializada para urgencias médicas en cualquier momento del día.",
    icono: "🚑",
  },
  {
    id: 4,
    titulo: "Tomografía",
    descripcion: "Estudios de imagen avanzados para diagnósticos detallados mediante escaneo de alta resolución.",
    icono: "🌀",
  },
  {
    id: 5,
    titulo: "Rayos X",
    descripcion: "Servicio de radiología digital para la evaluación precisa de estructuras óseas y órganos internos.",
    icono: "🩻",
  },
  {
    id: 6,
    titulo: "Ecografía",
    descripcion: "Diagnóstico por ultrasonido no invasivo para monitoreo clínico y seguimiento especializado.",
    icono: "📟",
  },
  {
    id: 7,
    titulo: "Sala de Operación",
    descripcion: "Quirófanos equipados con tecnología de última generación para procedimientos de alta complejidad.",
    icono: "🏥",
  },
  {
    id: 8,
    titulo: "Hospitalización",
    descripcion: "Habitaciones confortables y atención médica continua para una recuperación segura y monitoreada.",
    icono: "🛏️",
  },
  {
    id: 9,
    titulo: "UCI",
    descripcion: "Unidad de Cuidados Intensivos con soporte vital avanzado y vigilancia médica especializada 24/7.",
    icono: "💓",
  },
  {
    id: 10,
    titulo: "Farmacia",
    descripcion: "Amplio stock de medicamentos y asesoría farmacéutica para completar su tratamiento.",
    icono: "💊",
  },
  {
    id: 11,
    titulo: "Banco de Sangre",
    descripcion: "Procesamiento y suministro seguro de componentes sanguíneos para procedimientos y emergencias.",
    icono: "🩸",
  }
];

export default servicios;
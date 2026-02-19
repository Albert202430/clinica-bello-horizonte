// servicios/types.ts
export type Servicio = {
  id: number;
  titulo: string;
  descripcion: string;
  icono: string; // Aquí guardaremos el nombre de un icono o una ruta de imagen
  color?: string; // Por si quieres variar el color por servicio
};
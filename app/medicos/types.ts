// medicos/types.ts

export type Horario = {
  dia: string;
  horas: string;
};

export type Doctor = {
  id: number;
  nombre: string;
  especialidad: string;
  descripcion: string;
  imagen: string;
  email?: string;
  // Nuevos campos basados en la referencia:
  cmp?:string;
  rne?:string;
  
  horarios?: Horario[];
};

export interface DoctorProfileModalProps {
  medico: Doctor | null;
  onClose: () => void;
}
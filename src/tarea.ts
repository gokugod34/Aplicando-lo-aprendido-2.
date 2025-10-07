export type Tarea = {
titulo: string;
descripcion: string;
vencimiento: Date | string;
dificultad: 'Fácil' | 'Medio' | 'Difícil';
estado: 'Pendiente' | 'En curso' | 'Terminada';
creacion: Date;
ultimaEdicion: Date | null;
};


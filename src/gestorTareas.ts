import { Tarea } from './tarea';
import { cargarTareas, guardarTareas } from './archivotareas';

let tareas: Tarea[] = cargarTareas();

export function agregarTarea(t: Tarea): void {
tareas.push(t);
guardarTareas(tareas);
}

export function buscarTareas(clave: string): Tarea[] {
return tareas.filter(t => t.titulo.toLowerCase().includes(clave.toLowerCase()));
}

export function filtrarTareas(estado: Tarea['estado'] | 'Todas'): Tarea[] {
if (estado === 'Todas') return tareas;
return tareas.filter(t => t.estado === estado);
}

import fs from 'fs';
import { Tarea } from './tarea';

const ruta = './data/tareas.json';

export function guardarTareas(tareas: Tarea[]): void {
try {
    fs.writeFileSync(ruta, JSON.stringify(tareas, null, 2), 'utf-8');
} catch (error) {
    console.error("❌ Error al guardar tareas:", error);
}
}

export function cargarTareas(): Tarea[] {
try {
    if (!fs.existsSync(ruta)) return [];
    const contenido = fs.readFileSync(ruta, 'utf-8');
    return JSON.parse(contenido);
} catch (error) {
    console.error("❌ Error al cargar tareas:", error);
    return [];
}
}

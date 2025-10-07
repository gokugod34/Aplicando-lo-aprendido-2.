import { rl, preguntar } from './ui';
import { agregarTarea, filtrarTareas, buscarTareas } from './gestorTareas';
import { Tarea } from './tarea';

export async function menuPrincipal(): Promise<void> {
  console.log("\n📋 MENÚ PRINCIPAL");
  console.log("1. Ver tareas");
  console.log("2. Buscar tarea");
  console.log("3. Agregar tarea");
  console.log("0. Salir");

  const op = await preguntar("Elige una opción: ");
  switch (op.trim()) {
    case '1':
      await menuVerTareas();
      break;
    case '2':
      await menuBuscarTarea();
      break;
    case '3':
      await menuAgregarTarea();
      break;
    case '0':
      rl.close();
      return;
    default:
      console.log("❌ Opción inválida");
  }

  await menuPrincipal();
}

async function menuAgregarTarea(): Promise<void> {
  console.log("\n🆕 AGREGAR TAREA");

  const titulo = await preguntar("Título (obligatorio): ");
  if (!titulo.trim() || titulo.length > 100) {
    console.log("❌ Título inválido");
    return;
  }

  const descripcion = await preguntar("Descripción (opcional): ");
  const venc = await preguntar("Fecha de vencimiento (YYYY-MM-DD, opcional): ");
  const dif = await preguntar("Dificultad (1: Fácil, 2: Medio, 3: Difícil): ");
  const mapa: Record<string, Tarea['dificultad']> = {
    '1': "Fácil",
    '2': "Medio",
    '3': "Difícil"
  };

  const nueva: Tarea = {
    titulo: titulo.trim(),
    descripcion: descripcion.trim() || "Sin descripción",
    vencimiento: venc.trim() ? new Date(venc.trim()) : "Sin datos",
    dificultad: mapa[dif.trim()] || "Fácil",
    estado: "Pendiente",
    creacion: new Date(),
    ultimaEdicion: null
  };

  agregarTarea(nueva);
  console.log("✅ Tarea agregada correctamente");
}

async function menuVerTareas(): Promise<void> {
  console.log("\n📂 VER TAREAS");
  console.log("1. Todas");
  console.log("2. Pendientes");
  console.log("3. En curso");
  console.log("4. Terminadas");
  console.log("0. Volver");

  const op = await preguntar("Elige una opción: ");
  const estados: Record<string, Tarea['estado'] | 'Todas'> = {
    '1': 'Todas',
    '2': 'Pendiente',
    '3': 'En curso',
    '4': 'Terminada'
  };

  if (op.trim() === '0') return;

  const estadoSeleccionado = estados[op.trim()];
  if (!estadoSeleccionado) {
    console.log("❌ Opción inválida");
    return;
  }

  const lista = filtrarTareas(estadoSeleccionado);
  if (lista.length === 0) {
    console.log("📭 No hay tareas para mostrar");
    return;
  }

  lista.forEach((t, i) => {
    const estrellas = { "Fácil": "⭐", "Medio": "⭐⭐", "Difícil": "⭐⭐⭐" };
    console.log(`${i + 1}. ${t.titulo} [${t.estado}] - ${estrellas[t.dificultad]}`);
  });

  const op2 = await preguntar("Elige número de tarea para ver detalles o 0 para volver: ");
  const index = parseInt(op2.trim()) - 1;

  if (op2.trim() === '0') return;
  if (index >= 0 && index < lista.length) {
    await verDetalles(lista[index]);
  } else {
    console.log("❌ Opción inválida");
  }
}

async function verDetalles(t: Tarea): Promise<void> {
  console.log(`\n📝 Detalles de la tarea:`);
  console.log(`Título: ${t.titulo}`);
  console.log(`Descripción: ${t.descripcion}`);
  console.log(`Estado: ${t.estado}`);
  console.log(`Dificultad: ${t.dificultad}`);
  console.log(`Vencimiento: ${t.vencimiento}`);
  console.log(`Creación: ${t.creacion.toLocaleString()}`);
  console.log(`Última edición: ${t.ultimaEdicion ? t.ultimaEdicion.toLocaleString() : "Sin edición"}`);

  await preguntar("Presiona Enter para volver...");
}

async function menuBuscarTarea(): Promise<void> {
  console.log("\n🔍 BUSCAR TAREA");
  const clave = await preguntar("Ingresa palabra clave para buscar en títulos: ");
  const resultados = buscarTareas(clave.trim());

  if (resultados.length === 0) {
    console.log("📭 No se encontraron tareas");
    return;
  }

  resultados.forEach((t, i) => {
    console.log(`${i + 1}. ${t.titulo} [${t.estado}]`);
  });

  const op = await preguntar("Elige número de tarea para ver detalles o 0 para volver: ");
  const index = parseInt(op.trim()) - 1;

  if (op.trim() === '0') return;
  if (index >= 0 && index < resultados.length) {
    await verDetalles(resultados[index]);
  } else {
    console.log("❌ Opción inválida");
  }
}

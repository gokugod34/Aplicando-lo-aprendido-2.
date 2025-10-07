
console.log("🚀 Iniciando CLI...");

import { menuPrincipal } from './menu';

menuPrincipal().catch((err) => {
console.error("❌ Error al ejecutar el menú:", err);
});

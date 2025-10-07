// src/ui.ts
import readline from 'readline';

export const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
});

export function preguntar(texto: string): Promise<string> {
return new Promise(resolve => rl.question(texto, resolve));
}

export function cerrarEntrada(): void {
rl.close();
}


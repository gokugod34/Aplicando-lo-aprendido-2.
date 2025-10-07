# Aplicando-lo-aprendido-2.
1. Generalización simbólica: Reglas escritas del lenguaje
Estas son las convenciones y estructuras que definen cómo se escribe y ejecuta TypeScript bajo un enfoque estructurado:
Sintaxis basada en JavaScript:
Uso de function, if, else, for, while, switch, etc.

Tipado explícito: number, string, boolean, void, any, unknown, etc.
Declaración de variables con let, const, y var (aunque var se evita por buenas prácticas).

Modularización:
Uso de import y export para dividir el código en archivos reutilizables.
Separación lógica por funciones puras y procedimientos.

Control de errores y compilación:
El compilador verifica tipos en tiempo de desarrollo.
Configuración mediante tsconfig.json para definir reglas de compilación, módulos, y compatibilidad.
No se usan clases ni objetos (en este enfoque): se privilegia la estructura secuencial, modular y funcional.

2. Creencias de los profesionales: ¿Qué se considera “mejor” en TypeScript?
Aunque depende del contexto, hay varias creencias comunes entre desarrolladores que valoran TypeScript incluso en programación estructurada:

Tipado estático como ventaja:
Se cree que el tipado fuerte reduce errores en tiempo de ejecución y mejora la mantenibilidad del código.
Mejora la autocompletación y documentación implícita en editores como VS Code.

Transpilación a JavaScript:
Permite usar características modernas sin perder compatibilidad con navegadores antiguos.
Se considera una ventaja frente a lenguajes que no tienen esta flexibilidad.

Modularidad y escalabilidad:
Aunque no se usen clases, el sistema de módulos permite organizar proyectos grandes de forma clara.
Se cree que esto facilita el trabajo en equipo y el mantenimiento a largo plazo.

Integración con herramientas modernas:
TypeScript se integra fácilmente con linters, bundlers, y frameworks como Node.js, lo que lo hace ideal para proyectos CLI como los tuyos.

Permite usar características modernas sin perder compatibilidad con navegadores antiguos.

Se considera una ventaja frente a lenguajes que no tienen esta flexibilidad.

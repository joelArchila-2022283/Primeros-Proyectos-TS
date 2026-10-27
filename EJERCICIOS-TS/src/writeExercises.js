const fs = require('fs');
const path = require('path');
const root = path.join(__dirname);
const files = {
  'index.ts': `import readline from 'readline';
import { ejercicio1 } from './ejercicios/1';
import { ejercicio2 } from './ejercicios/2';
import { ejercicio3 } from './ejercicios/3';
import { ejercicio4 } from './ejercicios/4';
import { ejercicio5 } from './ejercicios/5';
import { ejercicio6 } from './ejercicios/6';
import { ejercicio7 } from './ejercicios/7';
import { ejercicio8 } from './ejercicios/8';
import { ejercicio9 } from './ejercicios/9';
import { ejercicio10 } from './ejercicios/10';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function pregunta(texto: string): Promise<string> {
  return new Promise((resolve) => {
    rl.question(texto, resolve);
  });
}

async function main(): Promise<void> {
  let opcion = '';

  while (opcion !== '0') {
    console.log('\n=== MENÚ DE EJERCICIOS ===');
    console.log('1. Hola Mundo');
    console.log('2. Suma de dos números');
    console.log('3. Resta de dos números');
    console.log('4. Multiplicación de dos números');
    console.log('5. División de dos números');
    console.log('6. Área de un rectángulo');
    console.log('7. Perímetro de un rectángulo');
    console.log('8. Conversión Celsius a Fahrenheit');
    console.log('9. Promedio de 3 notas');
    console.log('10. Salario total');
    console.log('0. Salir');

    opcion = (await pregunta('Seleccione una opción: ')).trim();

    switch (opcion) {
      case '1':
        ejercicio1();
        break;
      case '2':
        ejercicio2();
        break;
      case '3':
        ejercicio3();
        break;
      case '4':
        ejercicio4();
        break;
      case '5':
        ejercicio5();
        break;
      case '6':
        ejercicio6();
        break;
      case '7':
        ejercicio7();
        break;
      case '8':
        ejercicio8();
        break;
      case '9':
        ejercicio9();
        break;
      case '10':
        ejercicio10();
        break;
      case '0':
        console.log('Saliendo del programa. ¡Hasta luego!');
        break;
      default:
        console.log('Opción no válida. Intente de nuevo.');
    }
  }

  rl.close();
}

main().catch((error) => {
  console.error('Error en el programa:', error);
  rl.close();
});
`,
  'ejercicios/1.ts': `export function ejercicio1(): void {
  const mensaje = 'Hola Mundo';
  console.log('Ejercicio 1 - Hola Mundo');
  console.log(mensaje);
}
`,
  'ejercicios/2.ts': `export function ejercicio2(): void {
  const numero1 = 15;
  const numero2 = 8;
  const suma = numero1 + numero2;
  console.log('Ejercicio 2 - Suma de dos números');
  console.log(`${numero1} + ${numero2} = ${suma}`);
}
`,
  'ejercicios/3.ts': `export function ejercicio3(): void {
  const numero1 = 22;
  const numero2 = 7;
  const resta = numero1 - numero2;
  console.log('Ejercicio 3 - Resta de dos números');
  console.log(`${numero1} - ${numero2} = ${resta}`);
}
`,
  'ejercicios/4.ts': `export function ejercicio4(): void {
  const numero1 = 6;
  const numero2 = 9;
  const multiplicacion = numero1 * numero2;
  console.log('Ejercicio 4 - Multiplicación de dos números');
  console.log(`${numero1} * ${numero2} = ${multiplicacion}`);
}
`,
  'ejercicios/5.ts': `export function ejercicio5(): void {
  const numero1 = 28;
  const numero2 = 4;
  const division = numero1 / numero2;
  console.log('Ejercicio 5 - División de dos números');
  console.log(`${numero1} / ${numero2} = ${division}`);
}
`,
  'ejercicios/6.ts': `export function ejercicio6(): void {
  const base = 10;
  const altura = 5;
  const area = base * altura;
  console.log('Ejercicio 6 - Área de un rectángulo');
  console.log(`Base: ${base}, Altura: ${altura}, Área: ${area}`);
}
`,
  'ejercicios/7.ts': `export function ejercicio7(): void {
  const base = 10;
  const altura = 5;
  const perimetro = 2 * (base + altura);
  console.log('Ejercicio 7 - Perímetro de un rectángulo');
  console.log(`Base: ${base}, Altura: ${altura}, Perímetro: ${perimetro}`);
}
`,
  'ejercicios/8.ts': `export function ejercicio8(): void {
  const celsius = 25;
  const fahrenheit = (celsius * 9) / 5 + 32;
  console.log('Ejercicio 8 - Conversión de Celsius a Fahrenheit');
  console.log(`${celsius}°C = ${fahrenheit}°F`);
}
`,
  'ejercicios/9.ts': `export function ejercicio9(): void {
  const nota1 = 7.8;
  const nota2 = 8.4;
  const nota3 = 9.2;
  const promedio = (nota1 + nota2 + nota3) / 3;
  console.log('Ejercicio 9 - Promedio de 3 notas');
  console.log(`Notas: ${nota1}, ${nota2}, ${nota3}, Promedio: ${promedio.toFixed(2)}`);
}
`,
  'ejercicios/10.ts': `export function ejercicio10(): void {
  const horasTrabajadas = 42;
  const pagoPorHora = 12.5;
  const salarioTotal = horasTrabajadas * pagoPorHora;
  console.log('Ejercicio 10 - Salario total');
  console.log(`Horas trabajadas: ${horasTrabajadas}, Pago por hora: ${pagoPorHora}, Salario total: ${salarioTotal}`);
}
`,
};

for (const [relativePath, content] of Object.entries(files)) {
  const fullPath = path.join(root, relativePath);
  fs.mkdirSync(path.dirname(fullPath), { recursive: true });
  fs.writeFileSync(fullPath, content, 'utf8');
}
console.log('Archivos escritos correctamente.');

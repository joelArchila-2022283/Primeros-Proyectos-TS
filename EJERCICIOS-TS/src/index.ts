import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

import { holaMundo } from "../src/ejercicios/1.js";     
import { sumar } from "../src/ejercicios/2.js";
import { restar } from "../src/ejercicios/3.js";
import { multiplicacion } from "../src/ejercicios/4.js";
import { division } from "../src/ejercicios/5.js";
import { calculAreaRectangle } from "../src/ejercicios/6.js";
import { calculPerimeterRectangle } from "../src/ejercicios/7.js";
import { celsiusAFahrenheit } from "../src/ejercicios/8.js";
import { calculateAverage } from "../src/ejercicios/9.js";
import { calculSalary } from "../src/ejercicios/10.js";

async function ejecutarMenu(): Promise<void> {
    const rl = readline.createInterface({ input, output });
    let ejecutar: boolean = true;

    while (ejecutar) {
        console.log("\n=========================================");
        console.log("           MENÚ DE EJERCICIOS            ");
        console.log("=========================================");
        console.log("1. Hola Mundo");
        console.log("2. Suma de dos números");
        console.log("3. Resta de dos números");
        console.log("4. Multiplicación de dos números");
        console.log("5. División de dos números");
        console.log("6. Área de un rectángulo");
        console.log("7. Perímetro de un rectángulo");
        console.log("8. Conversión de grados Celsius a Fahrenheit");
        console.log("9. Promedio de 3 notas");
        console.log("10. Salario total");
        console.log("11. Salir");
        console.log("=========================================");

        const opcion: string = await rl.question("Seleccione una opción (1-11): ");
        console.log("-----------------------------------------");

        switch (opcion.trim()) {
            case "1":
                holaMundo();
                break;
            case "2":
                sumar();
                break;
            case "3":
                restar();
                break;
            case "4":
                multiplicacion();
                break;
            case "5":
                division();
                break;
            case "6":
                calculAreaRectangle();
                break;
            case "7":
                calculPerimeterRectangle();
                break;
            case "8":
                celsiusAFahrenheit();
                break;
            case "9":
                calculateAverage();
                break;
            case "10":
                calculSalary();
                break;
            case "11":
                console.log("Cerrando el programa. ¡Hasta luego!");
                ejecutar = false;
                break;
            default:
                console.log("Opción no válida. Por favor, intente de nuevo.");
                break;
        }
    }

    rl.close();
}

ejecutarMenu();
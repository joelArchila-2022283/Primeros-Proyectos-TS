console.log("|  |Departamentos de Guatemala|  |");
console.log("==================================");
console.log("1. Guatemala: Capital del país y centro político, económico y cultural.");
console.log("2. Sacatepequez: Conocido por su hermoso paisaje y su rica historia.");
console.log("3. Chimaltenango: Importante centro comercial y cultural.");
console.log("4. Escuintla: Región rural con una rica tradición indígena.");
console.log("5. Santa Rosa: Centro económico y comercial de la región.");
console.log("6. Solola: Zona rural con una fuerte identidad cultural.");
console.log("7. Totonicapan: Región montañosa con una rica historia.");
console.log("8. Quetzaltenango: Centro cultural y económico de la región.");
console.log("9. Suchitepequez: Zona rural con una fuerte identidad cultural.");
console.log("10. Retalhuleu: Región rural con una rica tradición indígena.");
console.log("11. San Marcos: Centro económico y comercial de la región.");
console.log("12. Huehuetenango: Región montañosa con una rica historia.");
console.log("13. Quiche: Región rural con una fuerte identidad cultural.");
console.log("14. Baja Verapaz: Zona rural con una rica tradición indígena.");
console.log("15. Alta Verapaz: Región montañosa con una rica historia.");
console.log("16. Peten: Región tropical con una rica biodiversidad.");
console.log("17. Izabal: Región costera con una rica tradición indígena.");
console.log("18. Zacapa: Región rural con una fuerte identidad cultural.");
console.log("19. Chiquimula: Región montañosa con una rica historia.");
console.log("20. Jalapa: Región rural con una rica tradición indígena.");
console.log("21. Jutiapa: Región costera con una rica tradición indígena.");
console.log("22. El Progreso: Región rural con una fuerte identidad cultural.");



import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Primer numero: ", function (a) {
    rl.question("Segundo numero: ", function (b) {
        rl.question("Tercer numero: ", function (c) {
            rl.question("Cuarto numero: ", function (d) {
                
                let suma = Number(a) + Number(b) + Number(c) + Number(d);

                console.log("La suma es: " + suma);

                rl.close()
            });
        });
    });
});






/*
let num1: number = 1;
let num2: number = 2;
let num3: number = 3;
let num4: number = 4;

function sumar(a: number, b: number, c: number, d: number): number {
    return a + b + c + d;
}
function restar(a: number, b: number, c: number, d: number): number {
    return a - b - c - d;
}
function multiplicar(a: number, b: number, c: number, d: number): number {
    return a * b * c * d;
}
function dividir(a: number, b: number, c: number, d: number): number {
    if (b === 0) {
        throw new Error("No se puede dividir por cero");
    }
    return a / b / c / d;
}

console.log("selccione la opccion que necesita")
console.log("1. Sumar = " + sumar(num1, num2, num3, num4));
console.log("2. Restar = " + restar(num1, num2, num3, num4));
console.log("3. Multiplicar = " + multiplicar(num1, num2, num3, num4));
console.log("4. Dividir = " + dividir(num1, num2, num3, num4));

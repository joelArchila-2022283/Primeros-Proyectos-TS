export function calculateAverage(): void {
    const nota1: number = 85;
    const nota2: number = 92;
    const nota3: number = 78;
    const promedio: number = (nota1 + nota2 + nota3) / 3;
    console.log("Resultado: El promedio de las notas [" + nota1 + ", " + nota2 + ", " + nota3 + "] es " + promedio.toFixed(2));
}
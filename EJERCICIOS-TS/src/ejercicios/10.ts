export function calculSalary(): void {
    const horasTrabajadas: number = 40;
    const pagoPorHora: number = 22.50;
    const salarioTotal: number = horasTrabajadas * pagoPorHora;
    console.log("Resultado: El salario total por " + horasTrabajadas + " horas a razón de Q." + pagoPorHora + " la hora es de Q." + salarioTotal);
}
export function celsiusAFahrenheit(): void {
    const celsius: number = 30;
    const fahrenheit: number = (celsius * 9 / 5) + 32;
    console.log("Resultado: " + celsius + "°C convertidos a Fahrenheit son " + fahrenheit + "°F");
}
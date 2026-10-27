import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

export function preguntar(texto: string): Promise<string> {
    return new Promise((resolver) => {
        rl.question(texto, resolver);
    });
}

export function cerrar(): void {
    rl.close();
}
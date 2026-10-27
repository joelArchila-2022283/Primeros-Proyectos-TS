import { mostrarMenu } from '../src/menu/menu';
import { cerrar } from './utils/readline';

async function main() {
    let continuar = true;
    while (continuar) {
        continuar = await mostrarMenu();
    }
    cerrar();
}

main();
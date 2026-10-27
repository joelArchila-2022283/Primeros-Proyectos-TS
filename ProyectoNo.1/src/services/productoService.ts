import { Producto } from '../models/producto';
import { productos } from '../data/Productos'; 

export function listar(): Producto[] {
    return productos;
}

export function buscar(sku: string): Producto | undefined {
    const lista = listar();
    for (let i = 0; i < lista.length; i++) {
        if (lista[i].sku === sku) {
            return lista[i];
        }
    }
    return undefined;
}

export function agregar(nuevo: Producto): void {
    const lista = listar();
    lista.push(nuevo);
}

export function eliminar(sku: string): void {
    const lista = listar();
    const nuevaLista: Producto[] = [];
    
    for (let i = 0; i < lista.length; i++) {
        if (lista[i].sku !== sku) {
            nuevaLista.push(lista[i]);
        }
    }
    
    productos.length = 0;
    for (let i = 0; i < nuevaLista.length; i++) {
        productos.push(nuevaLista[i]);
    }
}

export function actualizar(sku: string, nuevoPrecio: number): void {
    const lista = listar();
    for (let i = 0; i < lista.length; i++) {
        if (lista[i].sku === sku) {
            lista[i].precio = nuevoPrecio;
        }
    }
}
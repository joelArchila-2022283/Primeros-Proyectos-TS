import { Cliente } from '../models/cliente';
import { clientes } from '../data/clientes'; 


export function listar(): Cliente[] {
    return clientes;
}

export function buscar(codigo: string): Cliente | undefined {
    const lista = listar();
    for (let i = 0; i < lista.length; i++) {
        if (lista[i].codigo === codigo) {
            return lista[i];
        }
    }
    return undefined;
}

export function agregar(nuevo: Cliente): void {
    const lista = listar();
    lista.push(nuevo); 
}

export function eliminar(codigo: string): void {
    const lista = listar();
    const nuevaLista: Cliente[] = [];
    
    for (let i = 0; i < lista.length; i++) {
        if (lista[i].codigo !== codigo) {
            nuevaLista.push(lista[i]);
        }
    }
    
    clientes.length = 0;
    for (let i = 0; i < nuevaLista.length; i++) {
        clientes.push(nuevaLista[i]);
    }
}

export function actualizar(codigo: string, nuevoNombre: string): void {
    const lista = listar();
    for (let i = 0; i < lista.length; i++) {
        if (lista[i].codigo === codigo) {
            lista[i].nombre = nuevoNombre; 
        }
    }
}
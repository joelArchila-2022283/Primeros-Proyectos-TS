import { Categoria, Estado } from "../models/catalogos";

export interface Producto { 
    sku: string; 
    nombre: string; 
    precio: number; 
    cat: Categoria; 
    estado: Estado; 
}
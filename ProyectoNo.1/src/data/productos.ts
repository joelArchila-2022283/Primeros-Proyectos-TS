import { Categoria, Estado } from "../models/catalogos";
import { Producto } from "../models/producto";

export const productos: Producto[] = [
    {
        sku: "PROD-1",
        nombre: "Leche Entera",
        precio: 12.50,
        cat: Categoria.Alimentos,
        estado: Estado.Activo
    },
    {
        sku: "PROD-2",
        nombre: "Detergente Líquido",
        precio: 34.90,
        cat: Categoria.Limpieza,
        estado: Estado.Activo
    }
];
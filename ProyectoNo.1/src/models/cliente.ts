import { TipoCliente } from "./catalogos";

export type Direccion = {
    calle: string; 
    zona: number; 
};

export interface Cliente {
    codigo: string; 
    nombre: string; 
    tipo: TipoCliente; 
    direccion: Direccion; 
    telefono: string; 
    correo: string; 
    nit: string; 
}
import { TipoCliente } from "../models/catalogos";
import { Cliente } from "../models/cliente";

export const clientes: Cliente[] = [
    {
        codigo: "CLI-1",
        nombre: "Joel Archila",
        tipo: TipoCliente.Normal,
        direccion: {
            calle: "Avenida Principal",
            zona: 21
        },
        telefono: "",
        correo: "",
        nit: ""
    },
    {
        codigo: "CLI-2",
        nombre: "Gabriel Calderón",
        tipo: TipoCliente.Corporativo,
        direccion: {
            calle: "Calle Comercial",
            zona: 10
        },
        telefono: "",
        correo: "",
        nit: ""
    }
];
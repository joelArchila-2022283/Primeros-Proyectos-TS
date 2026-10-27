import { preguntar } from '../utils/readline';
import * as clienteSvc from '../services/clienteService';
import * as productoSvc from '../services/productoService';
import { TipoCliente, Categoria, Estado } from '../models/catalogos';

async function moduloClientes() {
    console.log("\n--- CRUD CLIENTES ---");
    console.log("1. Listar | 2. Buscar | 3. Agregar | 4. Actualizar Nombre | 5. Eliminar");
    const acc = await preguntar("Opción: ");

    switch(acc) {
        case '1': {
            console.log(JSON.stringify(clienteSvc.listar(), null, 2)); 
            break;
        }
        case '2': {
            const codB = await preguntar("Código: ");
            const encontradoB = clienteSvc.buscar(codB);
            if (encontradoB) {
                console.log(JSON.stringify(encontradoB, null, 2));
            } else {
                console.log("Cliente no encontrado.");
            }
            break;
        }
        case '3': {
            const codigo = await preguntar("Código del cliente: ");
            const nombre = await preguntar("Nombre: ");
            const calle = await preguntar("Calle: ");
            const zona = parseInt(await preguntar("Zona: "));
            const telefono = await preguntar("Teléfono: ");
            const correo = await preguntar("Correo: ");
            const nit = await preguntar("NIT: ");
            
            
            clienteSvc.agregar({ 
                codigo: codigo,
                nombre: nombre, 
                tipo: TipoCliente.Normal,
                direccion: { calle: calle, zona: zona },
                telefono: telefono,
                correo: correo,
                nit: nit
            });
            console.log("Cliente guardado con éxito.");
            break;
        }
        case '4': {
            const codA = await preguntar("Código a actualizar: ");
            const nuevoNom = await preguntar("Nuevo Nombre: ");
            clienteSvc.actualizar(codA, nuevoNom);
            console.log("Cliente actualizado.");
            break;
        }
        case '5': {
            const codE = await preguntar("Código a eliminar: ");
            clienteSvc.eliminar(codE);
            console.log("Cliente eliminado.");
            break;
        }
        default:
            console.log("Opción inválida.");
            break;
    }
}

async function moduloProductos() {
    console.log("\n--- CRUD PRODUCTOS ---");
    console.log("1. Listar | 2. Buscar | 3. Agregar | 4. Actualizar Precio | 5. Eliminar");
    const acc = await preguntar("Opción: ");

    switch(acc) {
        case '1': {
            console.log(JSON.stringify(productoSvc.listar(), null, 2)); 
            break;
        }
        case '2': {
            const skuB = await preguntar("SKU: ");
            const encontradoP = productoSvc.buscar(skuB);
            if (encontradoP) {
                console.log(JSON.stringify(encontradoP, null, 2));
            } else {
                console.log("Producto no encontrado.");
            }
            break;
        }
        case '3': {
            
            const sku = await preguntar("SKU del producto: ");
            const nombre = await preguntar("Nombre: ");
            const precio = parseFloat(await preguntar("Precio: "));
            
            productoSvc.agregar({ 
                sku: sku,
                nombre: nombre, 
                precio: precio, 
                cat: Categoria.Alimentos, 
                estado: Estado.Activo 
            });
            console.log("Producto guardado con éxito.");
            break;
        }
        case '4': {
            const skuA = await preguntar("SKU a actualizar: ");
            const nuevoPrecio = parseFloat(await preguntar("Nuevo Precio: "));
            productoSvc.actualizar(skuA, nuevoPrecio);
            console.log("Producto actualizado.");
            break;
        }
        case '5': {
            const skuE = await preguntar("SKU a eliminar: ");
            productoSvc.eliminar(skuE);
            console.log("Producto eliminado.");
            break;
        }
        default:
            console.log("Opción inválida.");
            break;
    }
}

export async function mostrarMenu(): Promise<boolean> {
    console.log("\n=== MENÚ PRINCIPAL ===");
    console.log("1. Clientes | 2. Productos | 3. Salir");
    const op = await preguntar("Selección: ");
    
    switch (op) {
        case '1': 
            await moduloClientes(); 
            return true;
        case '2': 
            await moduloProductos(); 
            return true;
        case '3':
            console.log("Saliendo del sistema...");
            return false;
        default:
            console.log("Opción no válida.");
            return true;
    }
}
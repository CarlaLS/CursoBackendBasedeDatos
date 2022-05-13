const createProductsTable = require('./tablaProductos/crearTablaProductos.js')
const createMessagesTable = require('./tablaMensajes/crearTablaMensajes.js')

const createTables = async () => {
    try {
        await createProductsTable()
        await createMessagesTable()
    } catch (error) {
        console.log(error)
    }
}

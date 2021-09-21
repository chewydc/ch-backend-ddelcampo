//-------------------------------------------------------------------
// Segundo Desafio Entregable: Manejo de Archivos
// Fecha de entrega tope: 17-09-21
// Alumno: Damian del Campo
//-------------------------------------------------------------------
const Contenedor = require ("./Contenedor.js");

// EJECUCION DE PRUEBA MODULO CONTENDEDOR

const producto1= [{
    title: 'producto1',
    price: 125.89,
    thumbnail: 'www.hola1.com'
}]

const producto2=[{
    title: 'producto2',
    price: 42.39,
    thumbnail: 'www.prdo2.com'
}]

const productosVarios = [
    { title: 'Regla', price: 323.45,thumbnail:'www.maped.com'},
    { title: 'Lapiz', price: 234.56,thumbnail:'www.pizzini.com'},
    { title: 'Goma', price: 45.67,thumbnail:'www.maped.com'},
    { title: 'Tijera', price: 456.78,thumbnail:'www.maped.com'},
    { title: 'Mochila', price: 67.89,thumbnail:'www.Hi5.com'},
    { title: 'Repuesto', price: 78.90,thumbnail:'www.rivadavia.com'}
]


async function main(){
    a = new Contenedor("productos.txt")
    
    console.log(await a.save(productosVarios))
    console.log(await a.getAll())
    console.log(await a.getById(1))
    console.log(await a.save(productosVarios))
    await a.deleteAll()
    console.log(await a.save(producto1))
    console.log(await a.save(productosVarios))
    await a.deleteById(2)
    console.log(await a.save(productosVarios))
    console.log(await a.save(productosVarios))
    console.log(await a.save(producto1))
    console.log(await a.save(producto2))
    console.log(await a.save(producto1))
    console.log(await a.getAll())

}

main()
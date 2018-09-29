var ventas = [];
var inventario = [];

function add(code, desc, type, precio1, precio2, stock) {
    producto = {
        code: code,
        desc: desc,
        type: type,
        precio1: precio1,
        precio2: precio2,
        stock: stock
    }
    inventario.push(producto);
}

function modify(code, nStock) {
    inventario.forEach(ele => {
        if (ele.code == code) {
            ele.stock = nStock;
        }
    });
}

function register(code, cant) {
    productos.forEach(ele => {
        if (ele.code == code) {
            ele.stock -= cant;
            venta = {
                code: code,
                desc: ele.desc,
                type: ele.type,
                precio1: ele.precio1,
                precio2: ele.precio2,
                totalSale: cant
            }
            ventas.push(venta);
        }
    });
}

function stockZero() {
    let stockArr = [];
    inventario.forEach(ele => {
        if (ele.stock == 0) {
            stockArr.push(ele);
        }
    });
    return stockArr;
}

function promedio(){
    let prom=0;
    let cont=0;
    ventas.forEach(ele => {
        prom += ele.totalSale*ele.precio2;
        cont += ele.totalSale;
    });
    prom = prom/cont;
    return prom;
}

do {
    var opc = parseInt(prompt("Menu: \n1.Agregar \n2.Modificar \n3.Registrar \n4.Stock cero \n5.Promedio \n6.Salir \n\n Digite una opcion: "));
    switch (opc) {
        case 1:
            let code = prompt("Digite el codigo: ");
            let desc = prompt("Digite la descripcion: ")
            let type = prompt("Digite la descripcion: ")
            let precio1 = prompt("Digite el precio de compra: ")
            let precio2 = prompt("Digite el precio de venta: ")
            let stock = prompt("Digite el stock: ")
            add(code, desc, type, precio1, precio2, stock);
            console.log("Producto agregado");
            break;
        case 2:
            let code2 = prompt("Digite el codigo: ")
            let nStock = prompt("Digite el nuevo stock: ")
            modify(code2, nStock);
            console.log("Producto modificado");
            break;
        case 3:
            let code3 = prompt("Digite el codigo: ")
            let cant = prompt("Digite la cantidad: ")
            register(code3, cant);
            console.log("Venta registrada");
            break;
        case 4:
            console.log(stockZero());
            break;
        case 5:
        console.log("El promedio es: ");
        console.log(promedio());
            break;        
        default:
            console.log("Digite una opcion correcta");
    }
}while(opc!=6);
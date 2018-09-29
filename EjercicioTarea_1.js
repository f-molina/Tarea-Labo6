var ventas = [];
var inventario = [];

function add(code, desc, type, precio1, precio2, stock){
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

function modify(code, nStock){
    inventario.forEach(ele =>{
        if(ele.code==code){
            ele.stock=nStock;
        }
    });
}

function register(code,cant){
    productos.forEach(ele => {
        if (ele.code==code){
            ele.stock-=cant;
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

function stockZero(){
    let stockArr = [];
    inventario.forEach(ele => {
        if(ele.stock==0){
            stockArr.push(ele);
        }
    });
    return stockArr;
}

var opc;
opc = parseInt(prompt("Menu: \n1.Agregar \n2.Modificar \n3.Registrar \n\n Digite una opcion: "));

switch(opc){
    case 1:
      prompt("Digite el codigo, descripcion, tipo, precio compra, precio venta, stock: ");
      add(code, desc, type, precio1, precio2, stock);
      break;
    case 2:
    prompt("Digite el codigo y nuevo stock: ")
      modify(code, nStock);
      break;
    case 3:
    prompt("Digite el codigo y cantidad: ")
      register(code, cant);
      break;
    default:
    console.log("Digite una opcion correcta");    
}
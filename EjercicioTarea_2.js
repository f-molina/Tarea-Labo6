function converter(medida, currUnidad, newUnidad, tipo) {
    currUnidad = currUnidad.toLowerCase();
    newUnidad = newUnidad.toLowerCase();
    tipo = tipo.toUpperCase();

    conversion = {
        oldValue: medida,
        unidad1: currUnidad,
        newValue: res(currUnidad, newUnidad, medida),
        unidad2: newUnidad,
        tipo: tipo
    }
    console.log(conversion);
}

function res(a, b, medida) {
    if(a == 'm' && b == 'cm') { return medida * 100; }
    if(a == 'cm' && b == 'm') { return medida / 100; }
    if(a == 'km' && b == 'm') { return medida * 1000; }
    if(a == 'm' && b == 'km') { return medida / 1000; }
    if(a == 'ft' && b == 'm') { return medida * 0.3048; }
    if(a == 'm' && b == 'ft') { return medida * 3.28084; }
    if(a == 'c' && b == 'f') { return (medida*(9/5))+32; }
    if(a == 'f' && b == 'c') { return ((medida-32)*(9/5)); }
    if(a == 'k' && b == 'f') { return ((medida-273.15)*(9/5))+32; }
    if(a == 'f' && b == 'k') { return (((medida-32)*(9/5))+32); }
    if(a == 'k' && b == 'c') { return medida -273.15; }
    if(a == 'c' && b == 'k') { return medida + 273.15; }
}
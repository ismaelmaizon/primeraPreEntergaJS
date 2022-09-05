
alert('Bien venido al simulador de compra con descuentos!');
alert('Le recuerdo que \n-Al realizar una compra mayora  los 50mil pesos se le aplicara un descuento del 25% ');
let inicio = prompt('¿QUE PRODUSCTOS BUSCAS? (se selecciona con los numeros): \n 1- Sillas \n 2- Puertas \n 3- Alfombras \n 4- Ninguno me voy \ningrese opcion: ');

//Productos con sus respectivos precios



// variables

let carrito = 0
let TotalSilla = 0;      
let TotalPuertas = 0;
let TotalCuadros = 0;


// Objetos sillas

function Sillas(material, tipo, precio) {
    this.material =material;
    this.tipo = tipo;
    this.precio = precio;
};

const Sillas1 = new Sillas('madera', 'Antigua', 5200);
const Sillas2 = new Sillas('madera', 'Moderna', 14000);
const Sillas3 = new Sillas('madera', 'Escritorio', 5900);
const Sillas4 = new Sillas('madera', 'Gamer', 13000);
const Sillas5 = new Sillas('Metal', 'Antigua', 5000);
const Sillas6 = new Sillas('Metal', 'Moderna', 14330);
const Sillas7 = new Sillas('Metal', 'Escritorio', 5000);
const Sillas8 = new Sillas('Metal', 'Gamer', 54400);
const Sillas9 = new Sillas('Plastico', 'Escritorio', 5100);
const Sillas10 = new Sillas('Plastico', 'Gamer', 5000);

// Objetos puertas

function Puertas(material, tipo, precio) {
    this.material =material;
    this.tipo = tipo;
    this.precio = precio;
};


const PuertasMadera1 = new Puertas('Madera', 'Antigua', 50000);
const PuertasMadera2 = new Puertas('Madera', 'Moderna', 14000);
const PuertasMadera3 = new Puertas('Madera', 'Exterior', 53000);
const PuertasMadera4 = new Puertas('Madera', 'Internas', 10000);
const PuertasMetal1 = new Puertas('Metal', 'Antigua', 5000);
const PuertasMetal2 = new Puertas('Metal', 'Moderna', 14000);
const PuertasMetal3 = new Puertas('Metal', 'Exterior', 5000);
const PuertasMetal4 = new Puertas('Metal', 'Internas', 5000);
const PuertasPlastico1 = new Puertas('Plastico', 'Antigua', 5000);
const PuertasPlastico2 = new Puertas('Plastico', 'Moderna', 14000);
const PuertasPlastico3 = new Puertas('Plastico', 'Exterior', 5000);
const PuertasPlastico4 = new Puertas('Plastico', 'Internas', 5000);


// Objetos alfombras

function Alfombras(material, tipo, precio) {
    this.material =material;
    this.tipo = tipo;
    this.precio = precio;
};


const AlfombrasLana1 = new Alfombras('Lana', 'Antigua', 5000);
const AlfombrasLana2 = new Alfombras('Lana', 'Moderna', 13500);
const AlfombrasLana3 = new Alfombras('Lana', 'Exterior', 5300);
const AlfombrasLana4 = new Alfombras('Lana', 'Internas', 11000);




//Arrays

const alfom = [AlfombrasLana1, AlfombrasLana2, AlfombrasLana3, AlfombrasLana4]
const sill = [Sillas1, Sillas2, Sillas3, Sillas4, Sillas5, Sillas6, Sillas7, Sillas8, Sillas9, Sillas10]
const puert = [PuertasMadera1, PuertasMadera2, PuertasMadera3, PuertasMadera4, PuertasMetal1, PuertasMetal2, PuertasMetal3, PuertasMetal4, PuertasPlastico1, PuertasPlastico2, PuertasPlastico3, PuertasPlastico4]


let num_alfombras = alfom.length
let num_sillas = sill.length
let num_puertas = puert.length

// FUNCIONES


function general(parmanetro1, indice) {
    let respuesta = false
    let num_parametro = parmanetro1.length
    let muliplo = 0
    let Total = 0
    let producto = ''
    
    if(indice == 1) {
        producto = 'Silla'
    } else if(indice == 2) {
        producto = 'Puerta'
    } else {
        producto = 'Alfombra'
    }
    
    while (respuesta == false) {

        for(let x = 0; x < num_parametro; x++){
            console.log('Numero de '+producto+' : '+ [x+1] +'\nMaterial  -  Tipo  -  Precio($) \n'  + parmanetro1[x].material +'    - '+ parmanetro1[x].tipo +'  -  $ '+ parmanetro1[x].precio);
        };
        
        
        op = parseInt(prompt('Escria numero de '+producto+' que quiere: '));
        valorReal_op = op-1;
        alert( producto+' selccionada: \nMaterial  -  Tipo  -  Precio($) \n'  + parmanetro1[valorReal_op].material +'    - '+ parmanetro1[valorReal_op].tipo +'  -  $ '+ parmanetro1[valorReal_op].precio);
        
        muliplo = parseInt(prompt('ingrese la cantidad deseada: '));
        if(Total == 0) {
            Total = parmanetro1[valorReal_op].precio * muliplo
        } 
        else {
            Total = Total + parmanetro1[valorReal_op].precio * muliplo
        };

        let i = prompt('Quieres agregar otra tipo de '+producto+'? : \nResponder si/no')
        
        if (i == 'si') {
            respuesta = false
        }
        else {
            respuesta = true
        };

    }

    return Total;

};


// scrip principal




while(inicio !== 4) {

    if (inicio == 4) {
        break;
    }
    switch (inicio) {
        case '1':
            alert('Seleccionaste Sillas');
            TotalSilla = (general(sill, inicio));
            break;
        case '2':
            alert('Seleccionaste Puertas');
            TotalPuertas = (general(puert, inicio));
            break;
        case '3':
            alert('Seleccionaste Alfombras');
            TotalCuadros = (general(alfom, inicio));
            break;
        default:
            alert('opcion no valida');
            break;
    }

    inicio = prompt('VUELVA A ELEGIR UNA OPCION (se selecciona con los numeros): \n 1- Sillas \n 2- Puertas \n 3- Alfombras \n 4- Fin de la compra \n 5- Ninguno me voy');
    
    
    if (inicio == 5) {
        inicio = 4
    };
};

if (inicio == 4) {
    carrito = TotalSilla + TotalCuadros + TotalPuertas;
    alert ('El total de su comprea es de: $' + carrito)
};

if (carrito >= 50000) {
    let descuento = carrito * 0.25
    let preciofinal = carrito - descuento
    alert ('como su compra supera los $50000 se le aplicará un descuento, el precio final es de: $' + preciofinal)
};

alert('que tenga buen dia!')
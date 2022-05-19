let numero = parseInt(prompt('Ingrese su numero:  '));

let dos = 2
let tres = 3
let cinco = 5 
let siete = 7



switch((numero % 2 == 0) || (numero % 3 == 0) || (numero % 5 == 0) || (numero % 7 == 0) ){

    case (numero % 2 == 0) :
    document.write('El '+numero+' es divisible en 2')
    break;

    case (numero % 3 == 0) :
    document.write('El '+numero+' es divisible en 3')
    break;

    case (numero % 5 == 0) :
    document.write('El '+numero+' es divisible en 5')
    break;

    case (numero % 7 == 0) :
    document.write('El '+numero+' es divisible en 7')
}


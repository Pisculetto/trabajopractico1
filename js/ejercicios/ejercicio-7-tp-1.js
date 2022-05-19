let numero1 = parseInt(prompt('Ingrese el primer numero: '));
let numero2 = parseInt(prompt('Ingrese el segundo numero: '));
let numero3 = parseInt(prompt('Ingrese el tercer numero: '));


if(numero1 > numero2 & numero3){
    document.write('El numero mas alto es: '+ numero1)
}

if(numero2 > numero1 & numero3){
    document.write('El numero mas alto es: '+ numero2)
}

if(numero3 > numero1 & numero2){
    document.write('El numero mas alto es: '+ numero3)
}
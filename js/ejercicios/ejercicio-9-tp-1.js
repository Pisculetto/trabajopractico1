let frase = prompt("Ingrese una frase de 5 caracteres");

console.log(frase.length);
console.log(frase.substring(0,1));

if (
  frase.substring(0,1) === 'a' ||
  frase.substring(0,1) === 'e' ||
  frase.substring(0,1) === 'i' ||
  frase.substring(0,1) === 'o' ||
  frase.substring(0,1) === 'u' 
)
{
document.write(frase.substring(0,1))
}

if (
    frase.substring(1,2) === 'a' ||
    frase.substring(1,2) === 'e' ||
    frase.substring(1,2) === 'i' ||
    frase.substring(1,2) === 'o' ||
    frase.substring(1,2) === 'u' 
  )
  {
  document.write(frase.substring(1,2))
  }

if (
    frase.substring(2,3) === 'a' ||
    frase.substring(2,3) === 'e' ||
    frase.substring(2,3) === 'i' ||
    frase.substring(2,3) === 'o' ||
    frase.substring(2,3) === 'u' 
  )
  {
  document.write(frase.substring(2,3))
  }

if (
    frase.substring(3,4) === 'a' ||
    frase.substring(3,4) === 'e' ||
    frase.substring(3,4) === 'i' ||
    frase.substring(3,4) === 'o' ||
    frase.substring(3,4) === 'u' 
  )
  {
  document.write(frase.substring(3,4))
  }

if (
    frase.substring(4,5) === 'a' ||
    frase.substring(4,5) === 'e' ||
    frase.substring(4,5) === 'i' ||
    frase.substring(4,5) === 'o' ||
    frase.substring(4,5) === 'u' 
  )
  {
  document.write(frase.substring(4,5))
}

if (
    frase.substring(5,6) === 'a' ||
    frase.substring(5,6) === 'e' ||
    frase.substring(5,6) === 'i' ||
    frase.substring(5,6) === 'o' ||
    frase.substring(5,6) === 'u' 
  )
  {
  document.write(frase.substring(5))
}
// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  return array[0];
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array[array.length-1];
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length;
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  for(let i=0; i<array.length; i++){
    array[i]=array[i]+1;
  }
  return array;
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento);
  return array;
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return array;
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  let resultado;
  let cont=true;
  for(let i= 0;i<palabras.length;i++){
    if(cont){
      resultado=palabras[i];
      cont=false;
    }else{
      resultado=resultado+" "+palabras[i];
    }
    
  }
  return resultado;
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  let band=false;
  for(let i=0; i<array.length; i++){
    if(array[i]==elemento){
      band = true;
    }
  }
  return band;
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  let cont=0;let resultado=0;
  for(let i=0; i<numeros.length; i++){
    cont=numeros[i];
    resultado=resultado+cont;
  }
  return resultado;
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  let cont=0;let resultado=0;
  for(let i=0; i<resultadosTest.length; i++){
    cont=resultadosTest[i];
    resultado=resultado+cont;
  }
  
  return resultado/resultadosTest.length;
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  let may=0;let cont=0;
  for(let i=0; i<numeros.length; i++){
    cont=numeros[i];
    if(may<cont){
      may=cont;
    }
  }
  return may;
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  let resultado=1;
  let cont=0;

  if(arguments.length==0){
    return 0;
  }else{
    for (var i=0; i < arguments.length; i++) {
      cont=arguments[i];
      resultado=resultado*cont;
    }
    return resultado; 
  }
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  let cont=0;
  for (var i=0; i < arreglo.length; i++) {
    if(arreglo[i]>18){
      cont++;
    }
  }
  return cont;
}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  switch(numeroDeDia){
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      return "Es dia Laboral";
      break;
    case 7:
    case 1:
      return "Es fin de semana";
      break;
  }
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  let res=0;
  if(n<10){
    res=n;
  }else{
    while(n>=10){
      n = n/10;
    }
    res= n*10;
  }

  if(n<10 && n>=9){
    return true;
  }else{
    return false;
  }
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  let band=false;
  for(let i=0; i<arreglo.length-1;i++){
    if(arreglo[i]==arreglo[i+1]){
      band=true;
    }
  }
  return band;
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  let vector=[];
  let cont=0;
  for(let i=0; i<array.length;i++){
    if(array[i]=="Enero"){
      vector.push("Enero");
      cont++;
    }else if(array[i]=="Marzo"){
      vector.push("Marzo");
      cont++;
    }else if(array[i]=="Noviembre"){
      vector.push("Noviembre");
      cont++;
    }
  }
  if(cont==3){
    return vector;
  }else{
    return "No se encontraron los meses pedidos";
  }
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  let vector=[];
  for(let i=0; i<array.length;i++){
    if(array[i]>100){
      vector.push(array[i]);
    }
  }
  return vector;
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  let vector=[];
  for(let i=0;i<10;i++){
    if(numero!=i){
      numero+=2;
      vector.push(numero);
    }else if(i==numero){
      return "Se interrumpió la ejecución";
    }
  }
  return vector;
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  let vector=[];
  for(let i=0; i<10; i++){
    if(i==5){
      continue;
    }else{
      numero+=2;
      vector.push(numero);
    }
  }
  return vector;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};

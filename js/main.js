/*Ejercicio #1
Escribir una función que tome un arreglo de números y devuelva el número mayor de la lista. 
Ejemplo del arreglo : [3, 5, 7, 1, 6] */
var myArray= [3,5,7,1,6];
var l =Math.max(myArray);
console.log(l);

/*Ejercicio #2
María llega a su entrevista de trabajo para el rol de Desarrollador Junior y se le pide que 
resuelva este problema: Dada una lista de números [-1, 3, 4, 2, 6], escribe una función en 
javascript para calcular  el número más pequeño.*/
var myArray= [3,5,7,1,6];
var l =Math.min(myArray);
console.log(l);


/*Ejercicio #3
Escribir una función que permita saber si un número se repite dentro de un arreglo.*/

const números = [1,3,50,17,10,3,30,3];
let repetidos =[];

const tempArray =
[números].sort();

for(let du = 0;i<tempArray.length;du++){
    if (tempArray[du+1]===
        tempArray[du]){
            repetidos.push(tempArray[du]);
        }
}
console.log(repetidos);
/*Ejercicio #4
Escribir una función que tome un arreglo ordenado y devuelva un arreglo completamente desordenado
Entrada: [1, 2, 5, 14, 24, 31, 50, 105]
Posible salida: [105, 31, 14, 1, 2, 50, 24, 5] */

const o = [1,2,5,14,24,31,50,105]
o.sort(functional(a,b) {
    return  a -b;
});
const reversed = nums.reverse();
console.log('reversed:',reversed);
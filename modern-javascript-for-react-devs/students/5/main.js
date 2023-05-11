//
// File: main.js
// Date: 5/24/2022
// 

/*const ex1 = () => {
    //const array = [1, '2', 3, 'test', 1.2];
    const array =[3,4,5,8]
    console.log(countNumbers(array));
}*/

/*const ex2 = () => { 
    const array = [12, 55, 2, 22, 11];
    console.log(minNumber(array));

}*/

/*const ex3 = () => {

   // const array1 = [1, 2, 3, 4, 5];
    
     const array1 = [1, 2,];
    const array2 = ['a', 'b', 'c', 'd', 'e'];
    console.log(interleave(array1, array2));
}*/


/*const ex4 = () => {
    console.log(palidrome('radar'));
   console.log(palidrome('month'));

}*/

const ex5 = () => {
    //console.log(str.split("this").length-1)
    console.log("this appears: "+ (str.split( "this" ).length-1) + " times. ")

}





///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Your functions here...
//ex1

/*const countNumbers = (array) => {
    let countNumbers = 0;
    for (let i =0; i < array.length; i++) {
        if (typeof(array[i]) == 'number') countNumbers++;
    }
    // TODO...
    return countNumbers;
}*/

///////////////
/*const minNumber = (array) => {
    let minNumber = array[0];
for (let i = 1; i < array.length; i++) {
  if (array[i] <  minNumber){
    minNumber = array[i];
   } }
   return minNumber;
}*/

////////////////////////////////////////////////////

/*const interleave =(array1 ,array2) => {

    let newArr =[];
        for (let i =0; i <array1.length; i++){ 
            
         newArr += array1[i] + array2[i]
           }

   return newArr; 
}*/

/*const interleave =(array1 ,array2) => {
if (array1.length !== array2.length){
    return  `ERROR: Array length mismatch`

}

}*/
/////////////////////////////////////////////////////////////////////// EXERCISE 4

/*const palidrome =(word) =>{
let newword =""
for (let i =word.length -1; i>=0; i--){
    newword += word[i];
}
if (newword == word){
    return true;
}else{
    return false;
}

}*/

/////////////////////////////////////////////////////////////////////////////////////////  Exercise 5


let str = "today this is a this is a this is a test.";
let x = str.split("this")


/*const main = async () => {
    ex1();
}

const main = async () => {
    ex2()
}*

const main = async () => {
    ex3()
}*/

/*const main = async () => {
    ex4()
}*/


const main = async () => {
    ex5()
}
main();



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

const ex3 = () => {

   // const array1 = [1, 2, 3, 4, 5];
    
     const array1 = [1, 2,];
    const array2 = ['a', 'b', 'c', 'd', 'e'];
    console.log(interleave(array1, array2));
}

//
// Your functions here...
//

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

////////////////////

/*const interleave =(array1 ,array2) => {

    let newArr =[];
        for (let i =0; i <array1.length; i++){ 
            
         newArr += array1[i] + array2[i]
           }

   return newArr; 
}*/

const interleave =(array1 ,array2) => {
if (array1.length !== array2.length){
    return  `ERROR: Array length mismatch`

}




}









//const main = async () => {
 //   ex1();
//}

/*const main = async () => {
    ex2()
}*/

const main = async () => {
    ex3()
}


main();



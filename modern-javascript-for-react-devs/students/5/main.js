//
// File: main.js
// Date: 5/24/2022
// 

const ex1 = () => {
    //const array = [1, '2', 3, 'test', 1.2];
    const array =[3,4,5,8]
    console.log(countNumbers(array));
}

const ex2 = () => {
    // TODO...
}

const ex3 = () => {
    // TODO...
}

//
// Your functions here...
//

const countNumbers = (array) => {
    let countNumbers = 0;
    for (let i =0; i < array.length; i++) {
        if (typeof(array[i]) == 'number') countNumbers++;
    }
    // TODO...
    return countNumbers;
}


const main = async () => {
    ex1();
}

main();

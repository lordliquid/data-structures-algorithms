//                          Multiplication Table
//                    -----------------------------
//  Easily create a multiplication table of arrays in the form of rows and columns.
//          
//               Set desired 'includeLabels' value - True or False
//               Set desired 'tableSize' value. (it's squared)
//
//                       - Robert Cutright - 2017

function MultiplicationTable () {
    let table = [];
    let tableSize = 12;
    let includeLabels = true;
    if (includeLabels) {
        for (let i = 0; i <= tableSize; i++) {
            let array = [];
            for (let x = 0; x <= tableSize; x++) {
                if (i === 0 && x === 0) {
                    array[x] = x;
                } else {
                    for (let y = 0; y <= tableSize; y++) {
                        array[0]= i;
                    }
                    array[x] = i * x;
                }
            }
            if (i === 0) {
                for (let z = 1; z < array.length; z++) {
                    array[z] = z
                }
            }
            table.push(array);
        }
    } else {
        for (let i = 1; i <= tableSize; i++) {
            let array = [];
            
            for (let x = 1; x <= tableSize; x++) {
                array[x-1] = i * x;
            }
            table.push(array);
        }
    }
    return table;
}

let multiplicationTable = MultiplicationTable();
console.log(multiplicationTable);
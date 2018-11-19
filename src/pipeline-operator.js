let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let array_copy = array.slice(0);         // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let array_first_3 = array.slice(0, 3);   // [1, 2, 3]
let array_last_4 = array.slice(5);       // [6, 7, 8, 9, 10]
let array_middle_2 = array.slice(4, 6);  // [5, 6]

console.log(`
    Original:   [${array}]    
    Copy:       [${array_copy}]
    First 3:    [${array_first_3}]
    Last 4:     [${array_last_4}]
    Middle 2:   [${array_middle_2}]
`);
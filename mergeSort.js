// const mergeHelper = (array1, array2) => {
//     let combined = [];
//     let i = 0;
//     let j = 0;
//     while( i < array1.length && j < array2.length){
//         if(array1[i] < array2[j]){
//             combined.push(array1[i]);
//             i++;  
//         }
//         else{
//             combined.push(array2[j]);
//             j++;
//         };
//     }
//     while (i < array1.length){
//         combined.push(array1[i]);
//         i++;
//     }
//     while (j < array2.length){
//         combined.push(array2[j]);
//         j++;
//     }
//     return combined;
// }

// //console.log(mergeHelper([1, 3, 4, 9], [2, 5, 6, 7, 10]));

// function mergeSort(array){
//     if(array.length === 1){
//      return array;
//     }
  
//    let middle = Math.floor(array.length / 2);
//    let left = array.slice(0, middle);
//    let right = array.slice(middle);
//    return mergeHelper(mergeSort(left), mergeSort(right));
// } 

// console.log(mergeSort([2, 5, 7, 10, 3, 6, 9, 4]));
//function quickSort(array, left, right){
    //SWAP HELPER
    const swap = (array, firstSwapIndex, secondSwapIndex) => {
        let temp = array[firstSwapIndex];
        array[firstSwapIndex] = array[secondSwapIndex];
        array[secondSwapIndex] = temp;
    }

    // PIVOT HELPER: sorts comparing elements to array[i] smallerValueItems PIVOT largerValueItems
    const pivotFunction = (array, pivotIndex = 0, endIndex = array.length - 1) => {
        let swapIndex = pivotIndex;

        //traverse array COMPARING PIVOT to array[i]
        for(let i = pivotIndex + 1; i <= endIndex; i++){
            
            //if array[i] > PIVOT  Ex.( 4, 6, 1) move i left >>>>>THIS BUBBLES SMALLER VALUES TO DOWN/LEFT OF PIVOT ( 4, 1, 6) >>>> ( 1, 4, 6)
            if(array[i] < array[pivotIndex]){
                //increment swap pointer
                swapIndex++;

                //call swap function
                swap(array, swapIndex, i);
                
            }
        }
        swap(array, pivotIndex, swapIndex);
        return swapIndex;
    }    
//}
let myArray0 = [1, 4, 5, 3];
let myArray1 = [4, 6, 1, 3, 2, 5];
let myArray2 = [4, 6, 1];

console.log(pivotFunction(myArray2));
console.log(myArray2);
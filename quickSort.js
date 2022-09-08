const swapFunction = (array, firstIndex, secondIndex) => {
    let temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
}

const pivotFunction = (array, pivotIndex = 0, endIndex = array.length-1) => {
    let swapIndex = pivotIndex;
    for(let i = pivotIndex + 1; i <= endIndex; i++){
        if(array[i] < array[pivotIndex]){
            swapIndex++;
            swapFunction(array, swapIndex, i);
        }
    } 
    //return the array that swap was executed on IT WILL RETURN SORTED 
    swapFunction(array, pivotIndex, swapIndex);
    return swapIndex;//returns index
}

const quicksort = (array, left = 0, right = array.length - 1) => {
    if(left < right){
        let pivotIndex = pivotFunction(array, left, right);
        quicksort(array, left, pivotIndex - 1);
        quicksort(array, pivotIndex + 1, right);
    }
    return array;
}

console.log(quicksort([4,6,1,7,3,2,5]));


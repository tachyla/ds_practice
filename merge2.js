const mergeSort = (array) => {

    //mergeHelper combines 2 arrays element's
    const mergeHelper = (arrayA, arrayB) => {
        let combined = [];
        let aIndex = 0;
        let bIndex = 0;

        while( aIndex < arrayA.length && bIndex < arrayB.length){
            if(aIndex < bIndex){
                combined.push(arrayA[aIndex]);
                aIndex++;
            }
            else{
                combined.push(arrayB[bIndex]);
                bIndex++;
            }
        }

        while(aIndex < arrayA.length){
            combined.push(arrayA[aIndex]);
            aIndex++;
        }
        
        while(bIndex < arrayB.length){
            combined.push(arrayB[bIndex]);
            bIndex++;
        }
        return combined;
    }


    //BASECASE: exits while loop when array's length === 1 
    if(array.length === 1) return array;
    while(array.length > 1) {
        let middle = Math.floor(array.length / 2);
        let left = array.slice(0, middle);
        let right = array.slice(middle);

                //mergeHelper is called adding it to callstack
                //mergeSort(left) is added to callstack on TOP OF mergeHelper
                //mergeSort(right) is added to callstack on TOP OF mergeSort(left)
        return mergeHelper(mergeSort(left), mergeSort(right));
    }
    
    
}

const myArray = [10, 6, 4, 8, 2, 5];
console.log(mergeSort(myArray));

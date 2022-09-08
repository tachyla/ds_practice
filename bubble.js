const bSort = (array) => {
    //i decreases in length on each loop
    for(let i = array.length - 1; i > 0; i--){
        
        //k increases traversing the array
        for(let k = 0; k < i; k++){
            if(array[k] > array[k + 1]){
                let temp = array[k];
                
                //move k forward to next element
                array[k] = array[j+ 1];
                
                //move temp forward by 1
                array[k + 1] = temp;
            }
        }
    }
    return array
}

bSort([1, 7, 4, 2, 0])